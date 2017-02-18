

let submitBtn = document.getElementById('subbtn');
let getBtn = document.getElementById('getbtn');

getBtn.addEventListener('click', function(event) {
  event.preventDefault();
  let textNode = document.getElementById('randomstuff');
  fetch('/stuff')
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        console.log('Abject Failure.');
      }
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      textNode.innerHTML = data;
    })
});

submitBtn.addEventListener('click', function(event) {
  event.preventDefault();
  let textNode = document.getElementById('whatever');
  let data = {
    content: textNode.value
  };
  let myHeaders = new Headers();
  myHeaders.append('Content-Type','application/json');
  fetch('/stuff', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: myHeaders
  })
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        console.log('Failed to POST');
      }
    })
  textNode.value = '';
});
