const countdown = document.querySelector(".countdown");

//set the launch date

const launchDate = new Date("Sept 13, 2018 13:00:00").getTime();

//console.log(launchDate);

//update every second

const intvl = setInterval(() => {
  //get todays date and time
  const now = new Date().getTime();
  // dist from now to launch date
  const distance = launchDate - now;
  // calculations
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((distance % (1000 * 60)) / 1000);

  //display result

  countdown.innerHTML = `
 <div>${days}<span>Days</span></div>
 <div>${hours}<span>hours</span></div>
 <div>${mins}<span>Minutes</span></div>
 <div>${secs}<span>Seconds</span></div>
`;

  //if launch date passed
  if (distance < 0) {
    clearInterval(intvl);
    //style and output text launched!
    countdown.style.color = "deepskyblue";
    countdown.innerHTML = "Baby Has Arrived!";
  }
}, 1000);
