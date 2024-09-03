const days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let day=new Date().getDay();
day=days[day];
let time=new Date();
let hours=time.getHours("");
let amOrPm = hours >= 12 ? 'PM' : 'AM';
if(hours>12){
    hours = hours % 12;
}
if(hours==0){
    hours=12;
}
console.log(`It\'s ${day} and the time is ${hours}:${time.getMinutes()}:${time.getSeconds()} ${amOrPm}`);
