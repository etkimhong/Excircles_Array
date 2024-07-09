

const dateArray = ["2024-12-01", "2024-05-02", "2024-08-04"];
function transform (dates){
    return dates.map(date=>{
        let [yyyy,mm,dd] = date.split("-");
        return dd+"-"+mm+"-"+yyyy;
    })
}
console.log(transform(dateArray));

