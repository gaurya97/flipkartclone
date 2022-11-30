// var m1=16;
// var m2=18;
// c=m2+m1;
// console.log(c);
// var a;
// function p(a) {
//     if (a > 18) {
//       var b ="your a adult";
//     }
//     else {
//        var b ="your a kid";
//     }
//     return b;
// }
// g = p(15);
// console.log(g);
// var gsj =[1,2,3,4,5,6,7];
// for(var i=0;i<gsj.length;i++)
// {
//     console.log(gsj[i]);
// }
// gsj.forEach(function(element){
//     console.log(element)
// })
// let x = 'Laurel';
// let y = 'Hardy';
// let z = y;
// y = x;
// x = z;
// console.log(x)
// console.log(y)
// function hello(){
//     return "Hello world!"
//     }
//     console.log(hello())


//     var c=0;
//     var p;
// function countTrue(arr) {
// 	for(var i=0;i<arr.length;i++)
// 		{
// 			if(arr[i]=='true')
// 				{
// 					c=c+1;
// 				}
// 		}
// 		return c;
// }
// p=countTrue(['true','false','true','true','false','true'])
// console.log(p)
// var c1=0,c2=0;
// var s1='true ='
// var s2='false ='
// var abc=['true','false','true','true','false','true']
// for(var i=0;i<abc.length;i++)
// 		{
// 			if(abc[i]=='true')
// 				{
// 					c1=c1+1;
// 				}
//                 else{
//                     c2=c2+1;
//                 }
// 		}
// console.log(s1,c1)
// console.log(s2,c2)
// function redundent(age){
//     var days=age*365;
//     return days ;
// }
// const f1=redundent(23)
// console.log(f1);
// function possibleBonus(a,b){
//     a=+a;
//     b=+b;
//     if(a==b){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// ludo =possibleBonus(4,4);
// console.log(ludo);
// find min index number between reapeted number.
// var arr = [2, 4, 5, 7, 1, 5, 7, 3]
// var b = arr.length;
// for (i = 0; i < arr.length; i++) {
//     for (j = i + 1; j < arr.length; j++) {
//         if (arr[i] == arr[j]) {
//             var a = i;
//             if (b < i) {
//                 console.log(b);
//                 break
//             }
//             b = a;
//         }
//     }
// }
// if (b==i) {
//     console.log('there is no any reapeted number');
// }
//
// var s = 13;
// var arr = [2, 3, 1, 7, 1, 5, 7, 1]
// var b = 0;
// var a = 0;
// for (i = 0; i < arr.length; i++) {
//     for (j = i; j < arr.length; j++) {
//         a = a + arr[j];
//         if (a == s) {
//             console.log('from array index',i,'to',j,'having sum 13 that numbers printed below');
//             for(n=i;n<=j;n++)
//             {
//                 console.log(arr[n]);
//             }
//             b = b + 1;
//         }
//         else if (a > s) {
//             a = 0;
//             break;
//         }
//     }
//     a=0;
// }
// if (b == 0) {
//     console.log('not found');
// }
// let a;
// let date;
// let time;
// const Option={weekday:'long',year:'numeric',month:'long',day:'numeric'};
// setInterval(() => {
//     a=new Date();
//     date=a.toLocaleDateString(undefined,Option);
//     time=a.getHours()+':'+a.getMinutes()+':'+a.getSeconds();
//     document.getElementById('ck').innerHTML=time+"<br>"+date;
// }, 1000);
// const item = {
//     "gaurav": 'marks',
//     'marks': {
//         "maths": 97,
//         "marathi": 82,
//         "english": 70,
//         "science": 91,
//         "social science": 93,
//         "hindi": 80,
//     }
// }
// console.log(item["marks"])
// var a = [45, 65, 98, 67, 55];
// var b = [56, 78, 09, 32, 76];
// var gaurav = []
// gaurav = gaurav.concat(a, b)
// console.log(gaurav)
// console.log(gaurav.splice(2, 3, 45, 60, 87))
// console.log(gaurav)
// let a=5;
// let b=2;
// c=a%b;
// console.log(c)
// let num =[12,45,6,78,54,34,23,332]
// num.forEach(element => {
//     // console.log(element*element)

// });
// let a="gaurav"
// let g=Array.from(a);
// console.log(g);
// for(let i of num){
//     console.log(i);
// }
// for(let j in num){
//     console.log(j);
// }
// 
// let a= num.filter((value)=>{
//     return value>10;
// })
// console.log(a);
// let a= num.reduce((h1,h2)=>{
//     return h1+h2
// })
// console.log(a);
// const fun =(h1,h2)=>{
//     return h1+h2;
// }
// gsj=num.reduce(fun);
// console.log(gsj);
// let x=prompt("what is your age");
// if(x>10 & x<20){
//     alert("age in between")
// }
// else{
//     alert("age not in between") 
// }
// console.log("you are",(x<10? "kid":'a'),(x>10&x<20?"teenage":""),(x>20? "adult":"")) 
// let x=prompt("enter number of array element")
// let a=[]
// let d=0
// let e=0
// for(i=1;i<=x;i++){
//     y=prompt("eneter inputs")
//     a.push(y)
//     if(y=="p"){
//         d=d+1
//     }
//     else{
//         e=e+1
//     }
// }
// const k=prompt("enetr theft catching range units")
// let c=0
// for(j=0;j<x;j++){
//     for(p=1;p<=k;p++){
//     if(a[j]!==a[j+p]){
//         if(j+p<x){
//          c=c+1;
//         }
//     }
// }
// }
// console.log(a)
// console.log("k=",k)
// console.log("c=",c)
// console.log("d=",d)
// console.log("e=",e)
// if(e<d){
//     if(c>e){
//         console.log("answer=",e)
//     }
//     else{
//         console.log("answer=",c)
//     }
// }
// else
// {
// if(c>d){
//     console.log("answer=",d)
// }
// else {
//     console.log("answer=",c)
// }
// }
// let obj={"h":99,"p":98,'g':100}
// for(i=0;i<Object.keys(obj).length;i++){
//     console.log("the marks of "+Object.keys(obj)[i]+" are "+obj[Object.keys(obj)[i]])
// }
// for(let key in obj){
//     console.log("the marks of "+key+" are"+ obj[key])

// }
// let result={
//  name:"name",
//  subject:{
// mar:"mar",
// eng:"eng",
// hin:"hin",
// maths:"maths",
// sci:"sci",
// socialsci:"sci"
//  },
//  percentage:"0",
// }
// result.name=prompt("enetr name of student")
// a=result.subject.mar=prompt("enter mar marks")
// b=result.subject.eng=prompt("enter eng marks")
// c=result.subject.hin=prompt("enter hin marks")
// d=result.subject.maths=prompt("enter maths marks")
// e=result.subject.sci=prompt("enter sci marks")
// f=result.subject.socialsci=prompt("enter socialsci marks")
// let p=(parseInt(a)+parseInt(b)+parseInt(c)+parseInt(d)+parseInt(e)+parseInt(f));
// let percent=(p/6);
// result.percentage=percent;
// console.log(p)
// console.log(result)
//switch case
// let n=prompt("enter your age")
// n=parseInt(n)
// switch(true){
//     case n<=13:
//     alert("your a kid")
//     break
//     case n>13 && n<=18:
//         alert("your a teenage")
//         break
//     default:
//         alert("your a adult")
// }
//sorting
// n=prompt("enter length of array")
// let a=[]
// for(let p=1;p<=n;p++){
//     let input=prompt("entre number")
//     a.push(parseInt(input))
// }
// console.log("unsort array =",a)
// for(let i =0;i<a.length;i++){
//     for(let j=0;j<a.length;j++){
//         if(a[j]>a[j+1]){
//             let s=a[j]
//             a[j]=a[j+1]
//             a[j+1]=s
//         }
//     } 
// }
// console.log("sort array =",a)
//guess the right number
// let n = prompt("please enter a number")
// n = parseInt(n)
// let n1 =Math.floor((Math.random()*100)+1);
// let c = 0
// let r1 = 100
// function result(a) {
//     if (a < n1) {
//         c = c + 1
//         alert("you have entered smaller number")
//         return input.call();
//     }
//     else if (a > n1) {
//         c = c + 1
//         alert("you have entered greater number")
//         return input.call();
//     }
//     else {
//         let r = r1 - c;
//       alert("you guess right number, you won! your score is "+r);
//     }
// }
// function input() {
//     alert("lets have a one more try")
//     n = prompt("please enter a number again")
//     n = parseInt(n)
//     return result(n);
// }
// result(n);

//water snake and gun
// let n=prompt("please enter a char. between w,s,r")
// function result(a){
//     let s1=["w","s","g"]
//     let s=s1[Math.floor(Math.random()*s1.length)]
//     if( a=="s"&&s=="w"){
//         alert("you win")
//     }
//     else if(a=="g"&&s=="s")
//     {
//         alert("you win")
//     }
//     else if(a=="w"&&s=="g")
//     {
//         alert("you win")
//     }
//     else{
//         alert("you lose")
//     }
//     console.log(s)
//    return input.call();
// }
// function input(){
//     let c=confirm("do you want to play again")
//     if(c==true){
//     n=prompt("please enter a char. between w,s,r")
//     return result(n);
//     }
//     else{
//         return 0;
//     }
// }
// result(n);
let n=100;
let a = Array.from(document.getElementsByClassName("a1"))
window.matchMedia("(max-width:900px)").addEventListener("change",function val(x){
    if(x.matches){
        const p = document.createElement("div");
p.classList.add("bar2")
p.setAttribute('id','uni2')
    p.appendChild(a[5])
    p.appendChild(a[6])
    p.appendChild(a[7])
    p.appendChild(a[8])
    p.appendChild(a[9])
document.getElementById("uni").append(p)
document.getElementById("uni").style.flexDirection="column";

    }
    else{
        document.getElementById("uni").style.flexDirection="row";
        r=document.getElementById("uni2")
        document.getElementById("uni").removeChild(r)
        document.getElementById("uni1").appendChild(a[5])
        document.getElementById("uni1").appendChild(a[6])
        document.getElementById("uni1").appendChild(a[7])
        document.getElementById("uni1").appendChild(a[8])
        document.getElementById("uni1").appendChild(a[9])
    }
})
document.getElementById("foot").addEventListener("click",function(e){
    const id=e.target.dataset.id;
    if(id=="about"){
        document.getElementById("abt").style.backgroundColor="white"
        document.getElementById("p1").style.display="block"
        document.getElementById("p2").style.display="none"
        document.getElementById("p3").style.display="none"
        document.getElementById("p4").style.display="none"
        document.getElementById("p5").style.display="none"
        document.getElementById("ply").style.backgroundColor="cadetblue"
        document.getElementById("ms").style.backgroundColor="cadetblue"
        document.getElementById("sal").style.backgroundColor="cadetblue"
        document.getElementById("hlp").style.backgroundColor="cadetblue"
    }
    else if(id=="help" )
    {
        document.getElementById("p1").style.display="none"
        document.getElementById("hlp").style.backgroundColor="white"
        document.getElementById("p2").style.display="block"
        document.getElementById("p3").style.display="none"
        document.getElementById("p4").style.display="none"
        document.getElementById("p5").style.display="none"
        document.getElementById("ply").style.backgroundColor="cadetblue"
        document.getElementById("abt").style.backgroundColor="cadetblue"
        document.getElementById("ms").style.backgroundColor="cadetblue"
        document.getElementById("sal").style.backgroundColor="cadetblue"
    }
    else if(id=="policy" )
    {
        document.getElementById("p1").style.display="none"
        document.getElementById("p2").style.display="none"
        document.getElementById("ply").style.backgroundColor="white"
        document.getElementById("p3").style.display="block"
        document.getElementById("p4").style.display="none"
        document.getElementById("p5").style.display="none"
        document.getElementById("abt").style.backgroundColor="cadetblue"
        document.getElementById("ms").style.backgroundColor="cadetblue"
        document.getElementById("sal").style.backgroundColor="cadetblue"
        document.getElementById("hlp").style.backgroundColor="cadetblue"
    }
    else if(id=="social" )
    {
        document.getElementById("p1").style.display="none"
        document.getElementById("p2").style.display="none"
        document.getElementById("p3").style.display="none"
        document.getElementById("sal").style.backgroundColor="white"
        document.getElementById("p4").style.display="block"
        document.getElementById("p5").style.display="none"
        document.getElementById("ply").style.backgroundColor="cadetblue"
        document.getElementById("abt").style.backgroundColor="cadetblue"
        document.getElementById("ms").style.backgroundColor="cadetblue"
        document.getElementById("hlp").style.backgroundColor="cadetblue"
    }
    else if(id=="mail us" )
    {
        document.getElementById("p1").style.display="none"
        document.getElementById("p2").style.display="none"
        document.getElementById("p3").style.display="none"
        document.getElementById("p4").style.display="none"
        document.getElementById("ms").style.backgroundColor="white"
        document.getElementById("p5").style.display="block"
        document.getElementById("ply").style.backgroundColor="cadetblue"
        document.getElementById("abt").style.backgroundColor="cadetblue"
        document.getElementById("sal").style.backgroundColor="cadetblue"
        document.getElementById("hlp").style.backgroundColor="cadetblue"
    }  
})
let image=document.querySelector(".slidercont");
let translate=0
setInterval(()=>{
    if(translate==0){
        translate=33.5
    }
    else if(translate==33.5)
    {
       translate=67
    }
    else{
        translate=0
    }
    image.style.transition="0.1s"
    image.style.transform=`translateX(${-translate}%)`
},2000)
let syly1=document.getElementById("slsy1")
let syly2=document.getElementById("slsy2")
syly2.addEventListener("click",()=>{
    if(translate==0){
        translate=33.5
        image.style.transform=`translateX(${-translate}%)`
    }
    else if(translate==33.5)
    {
       translate=67
       image.style.transform=`translateX(${-translate}%)`
    }
    else{
        translate=0
        image.style.transform=`translateX(${-translate}%)`
    }
})
syly1.addEventListener("click",()=>{
    if(translate==67){
        translate=33.5
        image.style.transform=`translateX(${-translate}%)`
    }
    else if(translate==33.5)
    {
       translate=0
       image.style.transform=`translateX(${translate}%)`
    }
})














