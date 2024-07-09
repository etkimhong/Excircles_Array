

let num = [1,23,4,5,4,66,7,8,8,6,5,1,3];
function filterValue(arr){
    return arr.filter((value,index,self)=>{
        return self.indexOf(value) == index;
    })
}
console.log(filterValue(num));