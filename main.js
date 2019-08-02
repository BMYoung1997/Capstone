//get UserName
function getUserName() {
  var userName = prompt ("Please enter your name to access Capstone");
	while (userName == null || !isNaN(userName)) {
	userName = prompt ("Please enter a valid name in this field");
	}
}

function getImages() {
  var images = document.querySelectorAll('div.userContentWrapper img, div.pinHolder img');
  return images;
}

//height
function getImageHeight(image) {
  return image.height;
}

//width
function getImageWidth(image) {
  return image.width;
}

//image replace
function replaceImages(images) {
  var baseImageUrl, height, width, image;{
  
    baseImageUrl = 'http://placekitten.com/g/';
    
  }
  for (var i=0,len=images.length; i<len; i++) {
    image = images[i];
    height = getImageHeight(image);
    width = getImageWidth(image);
    image.src = baseImageUrl + width + '/' + height;
  }
}

function main() {
  var userName = getUserName();
  var images = getImages();

  //repeat timeout
  setInterval(function() {
    images = getImages();
    replaceImages(images, location);
  }, 3000);
}

main();
