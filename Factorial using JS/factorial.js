let a=prompt("Enter the Number to find its Factorial")

//reduce 
let arr = []
for (let i = 0; i < a; i++) {
    arr[i]=a-i
}
const red = (a ,b)=>{
     return a*b
}
console.log(arr.reduce(red))

//for loops
let fac = 1
for (let i = 1; i<a; i++) {
        fac+=fac*i
}
console.log(fac)