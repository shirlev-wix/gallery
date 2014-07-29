
function createGalleryItem (img, imgAlt, header) {
  var galleryItem = createDivWithClass("gallery-item");
  var giHeader = createGIHeader(header);
  var giContent = createGIContent(img, imgAlt);
  var giControls = createGIControls();
  galleryItem.appendChild(giHeader);
  galleryItem.appendChild(giContent)
  galleryItem.appendChild(giControls);
  return galleryItem;
}

function createDivWithClass (className){
  var elem = document.createElement('div');
  elem.className = className;
  return elem;
}

function createGIHeader (header) {
  var headerDiv = createDivWithClass("gi-header");
  var h3 = document.createElement('h3');
  appendText(h3, header);
  headerDiv.appendChild(h3);
  return headerDiv;
}

function createGIContent (img, imgAlt) {
  var content = createDivWithClass("gi-content");
  var image = document.createElement('img');
  image.setAttribute('src',img);
  image.setAttribute('alt', imgAlt);
  content.appendChild(image);
  return content;
}

function createGIControls() {
  var controls = createDivWithClass("gi-controls");
  var btn1 = document.createElement('button');
  var btn2 = document.createElement('button');
  appendText(btn1, 'remove');
  appendText(btn2, 'edit');
  controls.appendChild(btn1);
  controls.appendChild(btn2);
  return controls;
}

function appendText (elem, text) {
  var textNode = document.createTextNode(text);
  elem.appendChild(textNode);
}


var sectionDiv = document.getElementsByTagName('section');
var newGI = createGalleryItem("http://dummyimage.com/200x142/00d6bd/ffffff.gif", "fifth image", "fifth image");
sectionDiv[0].appendChild(newGI);
