minute_hand = document.querySelector('#minutes');
hour_hand = document.querySelector('#hour');
second_hand = document.querySelector('#seconds')



function getSecondsSinceStartOfDay() {
    return new Date().getSeconds() + 
      new Date().getMinutes() * 60 + 
      new Date().getHours() * 3600;
  }
      
  setInterval( function() {
      var time = getSecondsSinceStartOfDay();
      //console.log(time);
      second_hand.style.transform = `rotate(${180+time}deg)`;
      minute_hand.style.transform =  `rotate(${180+time/60}deg)`;
      hour_hand.style.transform =  `rotate(${180+time/(60*60)}deg)`;

  }, 1000);