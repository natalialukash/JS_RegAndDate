function GetDate(year) {
let arr=[];
for(let month=0; month<12; month++){
    let date=new Date(year, month, 13);
    if (date.getDay()==5) arr.push(date);
}
return arr;
}
console.log(GetDate(2024));