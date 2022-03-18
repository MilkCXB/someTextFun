// 已知adcbbca 当两个相同元素相邻时消除

let str = "adcbbca";

let targetArr =  []

function output(str){
    let arr = [...str]
    for(let i = 0 ; i<arr.length;i++){
        
        if(arr[i] == targetArr[targetArr.length - 1]){
            targetArr.pop();
        }else{
            targetArr.push(arr[i])
        }
    }

    return targetArr.join('')
}



console.log(output(str),444);

