let a=new Date();
if (a.getHours()>=4&&a.getHours()<=10) alert("Доброе утро")
else if (a.getHours()>10&&a.getHours()<17) alert("Добрый день")
else if (a.getHours()>=17&&a.getHours()<24) alert("Добрый вечер")
else if (a.getHours()>=0&&a.getHours()<4) alert("Доброй ночи")
