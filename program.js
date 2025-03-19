let a=[2,3,6,4,7,8,9,10,12];
let b=[2,4,6,12,34,9,7,6];

function filterEvenNumbers(arr){
    let ans=arr.filter((x)=> x%2==0)
    return ans;
}

function sumOfArray(arr){
    let sum=arr.reduce((acc,num)=>{
        return acc=acc+num
    },0)
    return sum;
}

function sortAndConcat(a,b){
    a.sort((x,y)=>x-y);
    b.sort((x,y)=>x-y);
    
    
    return a.concat(b)
}

console.log(filterEvenNumbers(a));
console.log(filterEvenNumbers(b));
console.log(sumOfArray(a));
console.log(sumOfArray(b));
console.log(sortAndConcat(a,b));
