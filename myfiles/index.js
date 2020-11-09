


const arr1 = [1,[2,[3,[4,5]]],6];
// console.log(arr1);
// console.log(arr1.flat(Infinity));
let c = [];
function convert(arr){
    for(let i = 0; i<arr.length; i++){
        if(Array.isArray(arr[i])){
            convert(arr[i]);
        }else{
            c.push(arr[i]);
        }
    }
}
// console.log(c);
// convert(arr1);
// console.log(c);

//---------------------------------------------

const arr2 = [1,2,1,1,4,5];
let arr3 = Array.from(new Set(arr2));
console.log(arr3);

const f4 = arr2 =>{
    return arr2.filter((item, index)=>{
        return arr2.indexOf(item)===index;
    });
}
console.log(f4(arr2));