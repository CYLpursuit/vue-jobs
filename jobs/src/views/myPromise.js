const PENDING = 'pending';
const FULLFILLED = 'fullfilled';
const REJECTED = 'rejected';

// 第一个：同步promise
// class myPromise {
//   constructor (executor) {
//     this.value = '';
//     this.reason = '';
//     this.status = PENDING;

//     let resolve = (value) => {
//       if(this.status === PENDING) {
//         this.status = FULLFILLED;
//         this.value = value;
//       }
//     }

//     let reject = (reason) => {
//       if(this.status === PENDING) {
//         this.status = REJECTED;
//         this.reason = reason;
//       }
//     }

//     try {
//       executor(resolve, reject);
//     } catch (e) {
//       reject(e);
//     }
//   }

//   then(onFullfilled = () => {}, onRejected = () => {}) {
//     if (this.status === FULLFILLED) {
//       onFullfilled(this.value);
//     }

//     if (this.status === REJECTED) {
//       onRejected(this.reason);
//     }
//   }
// }

// new myPromise((resolve, reject) => {
//   console.log('promise');
//   reject('lzy');
// }).then((value) => {
//   console.log('fullfilled', value);
// }, (e) => {
//   console.log('rejected', e);
// });

// 第二个：异步 promise
class myPromise {
  constructor(executor) {
    this.value = '';
    this.reason = '';
    this.status = PENDING;
    this.onResolvedCallbacks = [];
    this.onRejectedCallbacks = [];

    let resolve = (value) => {
      if (this.status === PENDING) {
        this.value = value;
        this.status = FULLFILLED;
        this.onResolvedCallbacks.forEach(fn => {fn();})
      }
    }

    let reject = (reason) => {
      if (this.status === PENDING) {
        this.reason = reason;
        this.status = REJECTED;
        this.onRejectedCallbacks.forEach(fn => {fn();})
      }
    }

    try {
      executor(resolve, reject);
    } catch (e) {
      reject(e);
    }
  }

  then(onFullfilled = () => {}, onRejected = () => {}) {
    const thenPromise = new Promise((resolve, reject) => {
      if (this.status === FULLFILLED) {
        resolve(onFullfilled(this.value));
        console.log('then p');
      }
  
      if (this.status === REJECTED) {
        // TODO:报错处理
        reject(onRejected(this.reason));
      }

      // TODO:异步处理
      if (this.status === PENDING) {
        this.onResolvedCallbacks.push(() => {onFullfilled(this.value)});
        this.onRejectedCallbacks.push(() => {onRejected(this.reason)});
      }
    })
    return thenPromise;
  }
}

const thenP = new myPromise((resolve, reject) => {
  // setTimeout(() => {
    resolve('success');
  // }, 1000)
  console.log('promise');
}).then((value) => {
  console.log(value);
}, (e) => {
  console.log(e);
})
console.log('thenP', thenP);