let milliseconds=+prompt("введите миллисекунды")
let data=new Date(milliseconds)
function isDay(data){
let dataObj={
'd': data.getDay(),
'h': data.getHours(),
'm': data.getMinutes(),
's': data.getSeconds(),
}
return dataObj;
}
console.log(data)
console.log (isDay(data))