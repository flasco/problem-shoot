class Promixe {
  constructor(func) {
    this.thenCallArr = [];
    this.errorCallArr = [];
    this.status = 'PENDING';

    func.call(null, this._resolve.bind(this), this._reject.bind(this));
  }

  static all(array) {
    return new Promixe(resolve => {
      const resArr = [];
      array.forEach((element, index) => {
        element.then(res => {
          resArr.splice(index, 0, res);
          if (resArr.length === array.length) resolve(resArr);
        });
      });
    });
  }

  static deferred() {
    const dfd = {}
    dfd.promise = new Promixe(function(resolve, reject) {
      dfd.resolve = resolve
      dfd.reject = reject
    })
    return dfd
  }

  static race(array) {
    return new Promixe(resolve => {
      array.forEach((element, index) => {
        element.then(res => {
          // 利用 resolve 只会返回一次，但是其他的不会取消
          resolve(res);
        });
      });
    });
  }

  static resolve(val) {
    return new Promixe((resolve) => resolve(val));
  }

  static reject(val) {
    return new Promixe((resolve, reject) => reject(val));
  }

  _resolve(result) {
    // setTimeout 可以让 resolve，reject 进入异步队列，让catch，then 的 function 先行 initial， 挂载到 this 上
    process.nextTick(() => {
      if (this.status === 'PENDING') {
        this.status = 'RESOLVED';
        this.result = result;
        try {
          this._runThenCall();
        } catch (error) {
          this.error = error;
          this._runCatchCall();
        } finally {
          this.finallyCall && this.finallyCall.call(this);
        }
      }
    });
  }

  _runThenCall() {
    while (this.thenCallArr.length > 0) {
      this.result = this.thenCallArr.shift().call(this, this.result);
    }
  }

  _runCatchCall() {
    if (this.errorCallArr.length > 0) {
      while (this.errorCallArr.length > 0 && this.error != null) {
        try {
          if (this.error != null)
            this.errorCallArr.shift().call(this, this.error);
          this.error = null;
        } catch (error) {
          this.error = error;
        }
      }
    } else {
      throw this.error;
    }
  }

  _reject(error) {
    process.nextTick(() => {
      if (this.status === 'PENDING') {
        this.status = 'REJECTED';
        this.error = error;
        this._runCatchCall();
      }

    });
  }

  catch(call) {
    this.errorCallArr.push(call);
    return this;
  }

  then(onResolved, onRejected) {
    if (onResolved != null) {
      this.thenCallArr.push(onResolved);
    }
    if (onRejected != null) {
      this.errorCallArr.push(onRejected);
    }
    return this;
  }

  finally(call) {
    this.finallyCall = call;
    return this;
  }
}

module.exports = Promixe;