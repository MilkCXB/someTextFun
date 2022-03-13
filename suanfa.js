// 已知adcbbca 当两个相同元素相邻时消除

let str = "adcbbca";

let targetArr =  [...str]

function output(str){
    let arr = [...str]
    for(let i = 0 ; i<arr.length;i++){
        
        if(arrc[i] == arr[i+1]){
            continue
        }else{
            targetArr.push(arr[i])
        }
    }

    return targetArr
}

// function output(str){

 
//     console.log(1);
//     for(let i = 0 ; i<arr.length;i++){
        
//         if(arr[i]==arr[i+1]){
//            targetArr.splice(i,2)
//            output(arr)
//            break
//         }
 
        
        
//     }

 

//     return targetArr
// }




console.log(output(str));

