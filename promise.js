class PromiseObj {
    constructor(executor) {
        this.status = 'pending'
        this.value = undefined
        this.reason = undefined

        this.resolves = [],
            this.rejects = []

        const resolve = value => {
            if (this.status == 'pending') {
                this.status = 'fulfilled'
                this.value = value
            }

            while (this.resolves.length) {
                const callback = this.resolves.shift();
                callback(value)
            }
        }

        const reject = resaon => {
            if (this.status == 'pending') {
                this.status = 'rejected'
                this.reason = resaon
            }

            while (this.rejects.length) {
                const callback = this.rejects.shift();
                callback(value)
            }
        }

        try {
            executor(resolve, reject)
        } catch (error) {
            reject(error)
        }


    }

    then(onfulfillFun, onRejectedFun) {
        //判断输入类型
        onfulfillFun = typeof onfulfillFun === 'function' ? onfulfillFun : val => val;
        onRejectedFun = typeof reonRejectedFunject === 'function' ? onRejectedFun : reason => {
            throw reason
        }

        //链式调用
        var thenPromise = new PromiseObj((resolve, reject) => {
            const resolvePromise = cb => {
                try {
                    const x = cb(this.value)
                    if (x === thenPromise) {
                        // 不能返回自身哦
                        throw new Error('不能返回自身。。。')
                    }
                    if (x instanceof PromiseObj) {
                        // 如果返回值是Promise
                        // 如果返回值是promise对象，返回值为成功，新promise就是成功
                        // 如果返回值是promise对象，返回值为失败，新promise就是失败
                        // 谁知道返回的promise是失败成功？只有then知道
                        x.then(resolve, reject)
                    } else {
                        // 非Promise就直接成功
                        resolve(x)
                    }
                } catch (err) {
                    // 处理报错
                    reject(err)
                    throw new Error(err)
                }
            }
            //同步
            if (this.PromiseState === 'fulfilled') {
                // 处理成功
                // 如果当前为成功状态，执行第一个回调
                resolvePromise(onfulfillFun)
              
            } else if (this.PromiseState === 'rejected') {
                // 处
                // 如果当前为失败状态，执行第二个回调
                resolvePromise(onRejectedFun)
            } else if (this.PromiseState === 'pending') {
                //异步
                // 如果状态为待定状态，暂时保存两个回调
                // 如果状态为待定状态，暂时保存两个回调
                this.resolves.push(resolvePromise.bind(this, onfulfillFun))
                this.rejects.push(resolvePromise.bind(this, onRejectedFun))
            }
        })

        // 返回这个包装的Promise
        return thenPromise

    }


}

let promise1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("我是a")
    },5000)
})

let promise2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("我是b")
    },2000)
})

let promise3 = Promise.resolve(3)

let promise4 = Promise.resolve(4)





//all实现
Promise.all = function(array){
    let allData = [];
    let count = 0;
    return new Promise((resolve,reject)=>{
        for(let key in array){
             Promise.resolve(array[key]).then((data)=>{
                allData[key] = data;
                if(array.length == ++count){
                    resolve(allData)
                }
            }).catch((e)=>{
                reject(e)
            })
        }
    })
    
}

//race实现

Promise.race = function(array){
    return new Promise((resolve,reject)=>{
        for(let item of array){
            Promise.resolve(item).then((data)=>{
                resolve(data)
            }).catch((e)=>{
                reject(e)
            })
        }
    })
}