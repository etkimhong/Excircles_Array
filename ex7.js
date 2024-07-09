const string ="George Rymond Richard Martin";

function input(item){
    let arr = string.split(" ");
    let map = arr.map(name=>name[0]);
    let redu = map.reduce((acc, corrent)=>acc+corrent);
    return redu;
}
console.log(input(string));