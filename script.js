const dDate = new Date("Aug 2, 2025 06:00:00").getTime();

var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = dDate - now; 
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    //document.getElementById("timer").innerHTML = days + " DAYS " + hours + " HOURS " + minutes + " MINUTES " + seconds + " SECONDS ";
    document.getElementById("days").innerHTML = days + " DAYS ";
    document.getElementById("hours").innerHTML = hours + " HOURS ";
    document.getElementById("minutes").innerHTML = minutes + " MINUTES ";
    document.getElementById("seconds").innerHTML = seconds + " SECONDS ";

    //grammar
    if (days === 1) {
      document.getElementById("timer").innerHTML = days + " DAY " + hours + " HOURS "
      + minutes + " MINUTES " + seconds + " SECONDS ";
    }

    if (hours === 1) {
        document.getElementById("timer").innerHTML = days + " DAYS " + hours + " HOUR "
        + minutes + " MINUTES " + seconds + " SECONDS ";
      }
    
    if (minutes === 1) {
      document.getElementById("timer").innerHTML = days + " DAYS " + hours + " HOURS "
      + minutes + " MINUTE " + seconds + " SECONDS ";
    }

    if (seconds === 1) {
      document.getElementById("timer").innerHTML = days + " DAYS " + hours + " HOURS "
      + minutes + " MINUTES " + seconds + " SECOND ";
    }

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("message").innerHTML = "It's time. LABAN!";
      }
})
