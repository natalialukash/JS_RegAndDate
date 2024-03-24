str=prompt("Введите что-нибудь");
re=/[\da-z]/gi;
arr=str.match(re);
console.log(arr.length);