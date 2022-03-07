//深拷贝
function deepCopy(obj){
    let newObj = null;
    if(typeof(obj)=='object' && obj !== null){
        newObj = Array.isArray(obj)?[]:{};
        for(key in obj){
            newObj[key] = deepCopy(obj[key])
        }
    }else{
      newObj = obj;
    }
    return newObj;
}

//测试深拷贝对象
// let deepCopyObj = {
//     name:'cscs',
//     arr:[1,2,3,1,1],
//     fn:function(){
//         console.log('hi我是深拷贝前的函数');
//     },
//     obj:{
//         ONE:1,
//         TWO:{
//             one:1
//         }
//         }    
// }

function SumReduceFun(a){
    console.log(arguments);
    let arr = [];

    for (let index = 0; index < arguments.length; index++) {
        arr.push(arguments[index])
    }
    // arguments.map(i=>console.log(i))
     return arr.reduce((a,i)=> a+ i)
}

//数组去重
function arrDeleteRepeatFun(arr){
    // array.reduce((noDupes, curVal) => {
    //     if (noDupes.indexOf(curVal) === -1) { noDupes.push(curVal) }
    //     return noDupes
    //   },[])

    // let newArr = [];
    // arr.map((item)=>{
    //     if(newArr.indexOf(item) == -1){
    //         newArr.push(item)
    //     }
    // })
    // return newArr;

    return Array.from(new Set(arr))  
}


//翻转字符串
function reverseString(str){
    // return str.split('').reverse().join('')
     return [...str].reduce((a,v) => v+a)
}


//防抖
function debounce(fn,time){
    let timer = null;
    return function(){
        if(timer !== null){
            clearTimeout(timer)
        }

        timer = setTimeout(fn,time)
    }
}

//节流
function throttle(fn,time){
    let vaild = true;
    return function(){
        vaild = false;
        setTimeout(()=>{
            fn();
            vaild = true;
        },time)
    }
}

function textNew(namecc,num){
    console.log(11);
    this.namecc = namecc;
    this.num = num
}

//new方法实现
function newFun(fun,...rest){
    let obj = {};
    obj.__proto__ = fun.protoType;
    fun.call(obj,...rest)
    return obj
}




function handle() {   

    console.log(Math.random());

}

window.addEventListener('scroll', throttle(handle,1000));




