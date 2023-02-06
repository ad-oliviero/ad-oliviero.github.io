fetch("/navbar.html").then((response) => {
  response.text().then(function (result) {
    document.getElementById("navbar_placeholder").innerHTML = result;
    let elements = document.getElementsByClassName("nav-link");
    for (var i = 0; i < elements.length; i++) {
      if (elements[i].href == document.location) elements[i].classList.add("active");
      console.log(elements[i].href);
      console.log(document.location);
    }
  });
});
fetch("/footer.html").then((response) => {
  response.text().then(function (result) {
    document.getElementById("footer_placeholder").innerHTML = result;
  });
});
