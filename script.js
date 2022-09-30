
var images;


images = ['https://pixfeeds.com/images/topic/4912/1200-4912-ballroom-dancing-photo1.jpg', 'https://img.xcitefun.net/users/2014/07/361484,xcitefun-nature-color-9.jpg', 'https://img77.uenicdn.com/image/upload/v1542103697/category/shutterstock_630509456.jpg'];
let element_photos = document.getElementById('photos');
element_photos.setAttribute("src", images[0]);


document.getElementById('button_previous').addEventListener('click', (event) => {
  let element_photos2 = document.getElementById('photos');
  images.unshift(images.slice(-1)[0]);
  element_photos2.setAttribute("src", images.pop());

});

document.getElementById('button_next').addEventListener('click', (event) => {
  let element_photos3 = document.getElementById('photos');
  images.push(images[0]);
  element_photos3.setAttribute("src", images.shift());

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



document.getElementById('button_submit').addEventListener('click', (event) => {
  let element_display = document.getElementById('display');
  let new_li = document.createElement('li');
  new_li.innerText = getNumberOrString(document.getElementById('name_user').value);

  element_display.appendChild(new_li);
  let new_div = document.createElement('div');
  new_div.innerText = getNumberOrString(document.getElementById('feedback').value);

  element_display.appendChild(new_div);

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

console.log("Hello World");

