
  const result = document.getElementsByClassName('result')
  const main = document.getElementById('main')
  console.log(main)


  // Function for Time
  const fun=()=> {
      var today = new Date();
      var hours = today.getHours();
      var minutes = today.getMinutes();
      var seconds = today.getSeconds();
      setTimeout(fun, 1000);
      if(minutes<10){
          var minutes = '0'+minutes;
      }
      if(seconds<10){
          var seconds = '0'+seconds;
      }
      document.getElementById('txt').innerHTML =
      hours + ":" + minutes + ":" + seconds;
    }
    


    // Function for alert
  const showmessage=()=>
  {
  // Can be any modal
  timer.style.display = 'block';
  btn.style.display = 'block';
  main.style.height = '280px';
  window.alert('Time Up');
  console.log('Session Ended')
  }
  timer=document.getElementById("timer")
  f=document.getElementById("form")

  // Function for Setting up 
  f.addEventListener("submit",(e)=>{
    const btn  = document.getElementById('btn')
    // console.log(btn)
    const timer=document.getElementById("timer")
    e.preventDefault();
    console.log('Session Started')
    timer.style.display = 'none';
     console.log(btn)
    btn.style.display = 'none';
    main.style.height = '100px';

  setTimeout(showmessage,parseInt(timer.value)*60000)
  })