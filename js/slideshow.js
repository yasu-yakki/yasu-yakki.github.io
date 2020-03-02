var pics_src = new Array("images/IMG_7507.JPG", "images/Snapseed.JPG");
var num = -1;
slideshow_timer();
function slideshow_timer() {
  if (num == 1) {
    num = 0;
  } else {
    num++;
  }
  document.getElementById("slideshow").src = pics_src[num];
  setTimeout("slideshow_timer()", 5000);
}
