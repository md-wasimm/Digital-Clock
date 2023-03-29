let a;
let time;
let date;
let banglaTime;
let afganTime;
let chinaTime;
let ukTime;
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
setInterval(() => {
    a = new Date;
    date = a.toLocaleDateString(undefined, options);
    // time = a.getHours() + ' : ' + a.getMinutes() + ' : ' + a.getSeconds();
    time = a.toLocaleTimeString({ timestyle: 'full', hourCycle: 'h12' });
    banglaTime = new Date().toLocaleTimeString("en-US",
        { timeZone: 'Asia/Dhaka', timestyle: 'full', hourCycle: 'h12' });
    afganTime = new Date().toLocaleTimeString("en-US",
        { timeZone: 'Asia/Kabul', timestyle: 'full', hourCycle: 'h12' });
    chinaTime = new Date().toLocaleTimeString("en-US",
        { timeZone: 'Asia/Chongqing', timestyle: 'full', hourCycle: 'h12' });
    ukTime = new Date().toLocaleTimeString("en-US",
        { timeZone: 'Europe/London', timestyle: 'full', hourCycle: 'h12' });
    document.getElementById('time').innerHTML = time;
    document.getElementById('date').innerHTML = date;
    document.getElementById('bangla').innerHTML = banglaTime;
    document.getElementById('afgan').innerHTML = afganTime;
    document.getElementById('china').innerHTML = chinaTime;
    document.getElementById('uk').innerHTML = ukTime;
}, 1000);