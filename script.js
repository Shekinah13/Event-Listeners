function handleClick(element) {
  element.style = "background-color:green;"
}
var image = document.getElementById("image");
image.addEventListener("mouseover", function(){
  this.style ="box-shadow:2px 2px 2px grey";
  this.width ="350"
});

image.addEventListener("mouseout", function(){
  this.style ="";
  this.width ="300"
});

const card = document.querySelector('aside');

card.addEventListener('dblclick', function (e) {
  card.classList.toggle('large');
});

