const EventEmitter = require('events').EventEmitter;

class Queue {
  constructor(concurrent) {
    this._id = 0;
    this._preArr = [];
    this._workArr = [];
    this._concurrent = concurrent || 5;

    this._workEMT = new EventEmitter();

    this._workEMT.on('work', this._workRun.bind(this));
    this._workEMT.on('start', this._workPush.bind(this));
  }

  _workPush() {
    while (
      this._preArr.length > 0 &&
      this._workArr.length < this._concurrent
    ) {
      const item = this._preArr.shift();
      this._workArr.push(item);
    }
    this._workEMT.emit('work');
  }

  _workRun() {
    const workLen = this._workArr.length;
    const totalLen = workLen + this._preArr.length;
    if (totalLen < 1) this.drain();
    for (let i = 0; i < workLen; i++) {
      const current = this._workArr[i];
      if (current.isWorking !== 1) {
        current.isWorking = 1;
        this.work(current.content).then(() => {
          if (this._workArr.length < 1) {
            // 正常情况下在没处理之前 len 不会小于 1
            // 只有在 kill 之后才会出现这种情况
            console.log('killed');
            return;
          }
          const pos = this._workArr.findIndex(val => current.id === val.id);
          this._workArr.splice(pos, 1);
          this._workEMT.emit('start');
        });
      }
    }
  }

  drain() {
    console.log('empty...');
  }

  push(item) {
    this._preArr.push({
      id: this._id++,
      content: item
    });
    this._workArr.length < 1 && this._workEMT.emit('start');
  }

  kill() {
    this._workArr = [];
    this._preArr = [];
  }

  async work(item) {
    return new Promise(resolve => {
      console.log('default work, plz overload it', item.id, item.content);
      setTimeout(resolve, 1000);
    });
  }
}

class NovelQueue extends Queue {
  start() {
    for (let i = 0; i < 1000; i++) {
      this.push('https://www.2345.com/' + i);
    }
  }

  async work(item) {
    return new Promise(resolve => {
      console.log('哇哦', item);
      resolve();
    });
  }
}

new NovelQueue(5).start();
