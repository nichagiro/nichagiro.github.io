var form = document.getElementById('formy');

form.addEventListener('submit',function(e){

  e.preventDefault();

  let datos = new FormData(form);
  var ok = document.getElementById('successMSG');
  var error = document.getElementById('dangerMSG');

  fetch('https://wa.me/+573174865702',{
    body:datos,
    method:'POST'
  })

  // fetch('php/contactform.php',{
  //   method:'POST',
  //   body:datos
  // })
  // .then(res => res.json())
  // .then(data => {
    
  //   if(data == "OK"){
  //     ok.className+=' d-block';
  //     error.className+=' d-none';
  //     form.className = 'd-none';
  //   }
  //   else{
  //     error.className+='d-block';
  //   }

  // })

})