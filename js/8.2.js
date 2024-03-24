function dayNewYear(){
<<<<<<< HEAD
    let dataToday=new Date();
    let dataNewYear=new Date(dataToday.getFullYear(),0,1);
    dataNewYear.setFullYear(dataToday.getFullYear()+1)
    let diff=((dataNewYear-dataToday)/(1000*60*60*24)).toFixed(0)
    return diff}
    alert(dayNewYear())
=======
let dataToday=new Date();
let dataNewYear=new Date(dataToday.getFullYear(),0,1);
dataNewYear.setFullYear(dataToday.getFullYear()+1)
let diff=((dataNewYear-dataToday)/(1000*60*60*24)).toFixed(0)
return diff}
alert(dayNewYear())

>>>>>>> 12ec2e08db37f83b4579d1c491d75d4d694d941a
