const $days = document.getElementById('days'),
$hours = document.getElementById('hours'),
$mins = document.getElementById('mins'),
$secs = document.getElementById('secs');

const date = new Date('Feb 12, 2024 00:00:00').getTime();
console.log(date);



let interval = setInterval(()=>{
    const actual = new Date().getTime();
    let distancia = date-actual;

    let days = Math.floor(distancia / (1000*60*60*24));
    let hours = Math.floor((distancia % (1000*60*60*24))/(1000*60*60));
    let mins = Math.floor((distancia % (1000*60*60))/(1000*60))
    let secs = Math.floor((distancia % (1000*60) )/ (1000));


    $days.innerHTML = days;
    $hours.innerHTML = hours;
    $mins.innerHTML = mins;
    $secs.innerHTML = secs;

},1000);