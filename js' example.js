//alert("Hello World");
//console.log("給我認真上課-\(O谷O");
//var txt = prompt("write somthing");
//console.log("your anwer:"txt);

var A = Number(prompt("A=?"));
var B = Number(prompt("B=?"));
//if(A>B){
//    alert("A>B")
//}
//else if(A<B){
//    alert("A<B")
//}
//else if(A==B){
//    alert("A=B")
//}
//else{
//    alert("無法比較")
//}

function compare (a,b){
if(a>b){
    return"A>B"
}
else if(a<b){
    return"A<B"
}
else if(a==b){
    return"A=B"
}
else{
    return"無法比較"
}   
}
alert(compare(A,B))