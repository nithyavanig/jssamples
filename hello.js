

function callHello() {
    const ele = document.getElementById('hello');
    // All Sample goes here

const arrOfNum = [1, 2, 2, 4, 5, 6, 6];
// Find unique values
const u1=[];
arrOfNum.reduce((prev, current, index , arr)=>{
   if(arr.indexOf(prev) === index-1){
    u1.push(prev);
   }
   return current
})

let u2 = new Set(arrOfNum);
u2 = Array.from(u2.values())

const uniqVal = (value, index, self) => self.indexOf(value) === index;
let u3 = arrOfNum.filter(uniqVal);
//

// Remove from an array
let garr = [1, 2, 2, 4, 5, 6, 6];
// Remove all 2 s
const res = garr.splice(1, 2);
//Remove all
garr.splice(0, garr.length);

const arr1 = [1,2,3, 4, 5, 6];
let res1 = kthSmallest(arr1, 0, 6, 2);
const t = arr1.sort((a, b)=>a-b);
t[2]

    ele.innerHTML = res1;
}

// Find n th smallest element
function kthSmallest(arr,l,r,k){
    arr=arr.sort(function(a,b){
        return a-b
    })
  return (arr[k-1]) 
 }