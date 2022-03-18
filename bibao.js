function bibaoFun(){
    var a = 123;
    function chuqu(){
        console.log(a,'bibao');
        
    }
     chuqu();
}


function bibaoFun(){
    var a = 'wuwuw'
     return function(){
         console.log(a,'bibao');
     }
}

let bibao = bibaoFun();

bibao();


//参数轮传

function bibaolunchuan(x){
    return function(y){
        return x+y;
    }
}

let add10 = bibaolunchuan(10);

console.log(add10(2),'bibaolunchuan');



//方法私有化处理
function bibaoObjFun(){
    var num = 0 ;
    //私有
    function numChange(val){
        num += val
    }

    //公有
    return {
        add:function(){
            numChange(1)
        },

        recude:function(){
            numChange(-1)
        },

        value:function(){
            return num
        }
    }


}

let bibaoObj = bibaoObjFun();
bibaoObj.add();
console.log(bibaoObj.value());
bibaoObj.add();
bibaoObj.add();
console.log(bibaoObj.value());

//所谓闭包，就是一个函数在一个语法作用域里，在函数里返回一个函数，可以使外部访问到内部的变量，叫做闭包。
//闭包的应用场景:其实更像是面向对象编程，也像一个工厂函数，比如说要访问里面的变量时，或者对某些数据进行过滤器处理时，
//闭包往往能派上用场，同时也具备了私有方法和公有方法的特性，私有的方法里面访问，公有方法return出去外面访问。

