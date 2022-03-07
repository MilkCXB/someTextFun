var a = {
    user: "追梦子",
    fn: function (e, ee) {
        console.log(this.user); //追梦子
        console.log(e + ee); //520
    }
}
var b = a.fn;
var arr = [500, 20];
// console.log(...arr);

b.call(a, ...arr);

// b.apply(a,arr);

// var c =  b.bind(a,...arr);
// c();

let sy = Symbol('fff');

// 写法1
let syObject = {};
syObject[sy] = "kk";
console.log(syObject[sy]);

let target = {
    name: 'Tom',
    age: 24
}
let handler = {
    get: function (target, key) {
        console.log('getting ' + key);
        return target[key]; // 不是target.key
    },
    set: function (target, key, value) {
        console.log('setting ' + key);
        target[key] = value;
    }
}
let proxy = new Proxy(target, handler)
// proxy.name // 实际执行 handler.get
// proxy.age = 25 // 实际执行 handler.set
proxy.nod;
// proxy.nod = 12;
// getting name
// setting age
// 25

let exam = {
name: "Tom",
age: 24,
get info(){
    return this.name + this.age;
}
}
console.log(Reflect.get(exam, 'info'));

let obj = {};
let num = 0 ;
Object.defineProperty(obj,'a',{
  get:()=>{
        num ++;

        return num
        // return 123;
  },

  set:(value)=>{
    console.log('setter');
  }
})