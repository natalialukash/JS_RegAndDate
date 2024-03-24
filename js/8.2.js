function dayNewYear(){
    let dataToday=new Date();
    let dataNewYear=new Date(dataToday.getFullYear(),0,1);
    dataNewYear.setFullYear(dataToday.getFullYear()+1)
    let diff=((dataNewYear-dataToday)/(1000*60*60*24)).toFixed(0)
    return diff}
    alert(dayNewYear())