function setTime() {
  let timezone = document.querySelector("#timezone-form-selector");
  let timezoneValue = timezone.options[timezone.selectedIndex].value;

  console.log(timezoneValue);

  let now;

  if (timezoneValue !== "") {
    now = new Date(
      new Date().toLocaleString("en-US", {
        timeZone: timezoneValue
      })
    );
  } else {
    now = new Date();
  }

  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();
  const secondsDegree = (seconds / 60) * 360 + 90;
  const minutesDegree = (minutes / 60) * 360 + 90;
  const hoursDegree = (hours / 12) * 360 + 90;

  const secondHand = document.querySelector(".second-hand");
  secondHand.style.transform = `rotate(${secondsDegree}deg)`;

  const minuteHand = document.querySelector(".min-hand");
  minuteHand.style.transform = `rotate(${minutesDegree}deg)`;

  const hourHand = document.querySelector(".hour-hand");
  hourHand.style.transform = `rotate(${hoursDegree}deg)`;
  // let seconds = now.getDate('seconds');
  // let seconds = now.getDate('seconds');
}

setInterval(setTime, 1000);
