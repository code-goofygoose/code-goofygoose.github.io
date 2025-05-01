const dDate = new Date("Aug 2, 2025 00:00:00").getTime();

var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = dDate - now; 
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("timer").innerHTML = days + " DAYS " + hours + " HOURS "
    + minutes + " MINUTES " + seconds + " SECONDS ";

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("message").innerHTML = "It's time.";
      }
})