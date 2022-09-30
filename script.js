function getNumberOrString(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return value
  } else {
    return number_value
  }
}



document.getElementById('button1').addEventListener('click', (event) => {
  let element_text = document.getElementById('text1');
  window.speechSynthesis.speak(new SpeechSynthesisUtterance(getNumberOrString(document.getElementById('text1').value)));

});



function getNumberOrString(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return value
  } else {
    return number_value
  }
}



document.getElementById('button2').addEventListener('click', (event) => {
  let element_list = document.getElementById('list');
  let new_li = document.createElement('li');
  new_li.innerText = getNumberOrString(document.getElementById('text2').value);

  element_list.appendChild(new_li);

});


var address, names, item;


address = ['https://www.linkedin.com/in/afsha-hossain', 'https://www.instagram.com/unityofbeing/', 'https://www.pinterest.co.uk/QueenFInterests/'];
names = ['LinkedIn', 'Instagram', 'Pinterest'];
address.forEach((item) => {
  while (!!names.length) {
    if(--window.LoopTrap <= 0) throw "Infinite loop.";
    let element_sites = document.getElementById('sites');
    let new_li = document.createElement('li');
    let new_a = document.createElement('a');
    new_a.innerText = names.shift();
    new_a.setAttribute("href", address.shift());

    new_li.appendChild(new_a);

    element_sites.appendChild(new_li);
  }
});



