function main() {
  var userName = getUserName();
  var images = getImages();

  setInterval(function() {
    images = getImages();
    replaceImages(images, location);
  }, 3000);
}

main();