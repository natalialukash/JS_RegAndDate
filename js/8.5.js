let DR=prompt("Введите свою дату рождения");
let dataBirthday=new Date(DR)
let dataToday=new Date()
console.log(((dataToday-dataBirthday)/(1000*60*60*24*365)).toFixed(0))