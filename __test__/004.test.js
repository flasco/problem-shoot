const Promixe = require('../src/promixe');

test('promixe -> then chain', () => {
  new Promixe((resolve, reject) => {
    setTimeout(() => {
      resolve(4 ** 2);
    }, 1000);
  })
    .then(val => {
      expect(val).toBe(16);
    })
    .then(val => {
      expect(val).toBeUndefined();
    });
});

test('promixe -> catch chain', () => {
  new Promixe((resolve, reject) => {
    setTimeout(() => {
      resolve(4 ** 2);
    }, 1000);
    reject('error!');
  })
    .catch(e => {
      expect(e).toBe('error!');
      throw 'waa, new Error!';
    })
    .catch(e => {
      expect(e).toBe('waa, new Error!');
    })
});

test('promixe -> finally action', () => {
  let x = 0;
  new Promixe((resolve, reject) => {
    setTimeout(() => {
      resolve(4 ** 2);
    }, 1000);
  }).finally(() => {
    x = 10086;
    expect(x).toBe(10086);
  });
});

test('promixe -> async/await test', async () => {
  const result = await new Promixe(resolve => {
    setTimeout(() => resolve('hello, async/await'), 1000);
  });
  expect(result).toBe('hello, async/await');
});

// async/await 本质还是一个promise，await 关键字会向 then 函数里塞 onResolved 和 onRejected 两个 function
test('promixe -> async/await test throw', async () => {
  try {
    await new Promixe((resolve, reject) => {
      setTimeout(() => reject('async/await error'), 1000);
    });
  } catch (error) {
    expect(error).toBe('async/await error');
  }
});

test('promixe -> promixe.all', () => {
  const task1 = new Promixe((resolve) => setTimeout(() => resolve(5), 500));
  const task2 = new Promixe((resolve) => setTimeout(() => resolve(10), 800));
  Promixe.all([task1, task2]).then(val => {
    expect(val).toBe([5, 10]);
  })
})
