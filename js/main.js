



var sect = document.getElementById("team");
var div1 = document.createElement("div");
sect.appendChild(div1);
div1.classList.add("container");

var card = document.createElement("div");
div1.appendChild(card);
card.classList.add("card");

var image_card = document.createElement("div");
card.appendChild(image_card);
image_card.classList.add("image-card");



var image = document.createElement("img");
image_card.appendChild(image);
image.src = "images/blog-1.jpg";

var button_image = document.createElement("a");
image_card.appendChild(button_image);
button_image.classList.add("button-card");
button_image.innerHTML = "More details";
button_image.setAttribute("href", "#");
button_image.setAttribute("onclick", "viewdetails()");

var details = document.createElement("div");
card.appendChild(details);
details.classList.add("details");

var icon = document.getElementById("icon-close");
details.appendChild(icon);
icon.setAttribute("onclick", "hidedetails()")


var para1 = document.createElement("p");
details.appendChild(para1);
para1.classList.add("paras");
para1.innerHTML = "Tue, December 12 / Julia Parker";

var heading = document.createElement("h3");
details.appendChild(heading);
heading.classList.add("head");
heading.innerHTML = "Eum ad dolor et. Autem aut fugiat debitis";

var para2 = document.createElement("p");
details.appendChild(para2);
para2.classList.add("para-bottom");
para2.innerHTML = "Illum voluptas ab enim placeat. Adipisci enim velit nulla. Vel omnis laudantium. Asperiores eum ipsa est officiis. Modi qui magni est";

var link = document.createElement("a");
details.appendChild(link);
link.classList.add("links");
link.innerHTML = "Read More";
link.setAttribute("href", "#");

function viewdetails() {
    image_card.nextElementSibling.classList.add("view");
}
function hidedetails() {
    icon.parentNode.classList.remove("view");
}
