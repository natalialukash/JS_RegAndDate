let day1=prompt("Введите дату в формате гг-мм-дд")
let day2=new Date(day1)
day3=day2.getDay()
function IsThreeDay(){
let dataObj0={
'prev': "cб",
'curr': "вс",
'next': "пн"
}
let dataObj1={
'prev': "вс",
'curr': "пн",
'next': "вт"
}
let dataObj2={
'prev': "пн",
'curr': "вт",
'next': "ср"
}
let dataObj3={
	'prev': "вт",
	'curr': "ср",
	'next': "чт"
	}
let dataObj4={
	'prev': "ср",
	'curr': "чт",
	'next': "пт"
	}
let dataObj5={
	'prev': "чт",
	'curr': "пт",
	'next': "сб"
	}
let dataObj6={
	'prev': "пт",
	'curr': "сб",
	'next': "вс"
	}

if (day3=="0") return dataObj0
else if (day3=="1") return dataObj1
else if (day3=="2") return dataObj2
else if (day3=="3") return dataObj3
else if (day3=="4") return dataObj4
else if (day3=="5") return dataObj5
else if (day3=="6") return dataObj6
}
console.log(IsThreeDay())