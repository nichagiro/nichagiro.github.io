var form = document.getElementById('formy');
var ok = document.getElementById('successMSG');
var error = document.getElementById('dangerMSG');


form.addEventListener('submit',function(e){

  e.preventDefault();

  let data = new FormData(form);
  ajax('POST', 'https://formspree.io/f/mbjpqeqq', data);

})



function ajax(method, url, data) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function() {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      ok.className+=' d-block';
      error.className+=' d-none';
      form.className = 'd-none';
    } else {
      error.className+='d-block';
    }
  };
  xhr.send(data);
}