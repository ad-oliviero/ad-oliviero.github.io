// oh you think this is a bad idea? I don't give a fuck, I'm not a frontend developer
fetch("/head.html").then((response) => {
  response.text().then(function (result) {
    document.getElementsByTagName("head")[0].innerHTML += result;
  });
});
fetch("/navbar.html").then((response) => {
  response.text().then(function (result) {
    const navbar_placeholder = document.getElementById("navbar_placeholder");
    if (navbar_placeholder) {
      const parentNode = navbar_placeholder.parentNode;
      let newnode = document.createElement("nav");
      newnode.innerHTML = result;
      newnode.classList.add("navbar");
      newnode.classList.add("navbar-expand-lg");
      newnode.classList.add("bg-body-tertiary");
      parentNode.replaceChild(newnode, navbar_placeholder);
      let elements = document.getElementsByClassName("nav-link");
      for (var i = 0; i < elements.length; i++) {
        if (elements[i].href == document.location) {
          elements[i].classList.add("active");
          elements[i].setAttribute("aria-current", "page");
        }
      }
    }
  });
});
fetch("/footer.html").then((response) => {
  response.text().then(function (result) {
    const footer_placeholder = document.getElementById("footer_placeholder");
    if (footer_placeholder) {
      const parentNode = footer_placeholder.parentNode;
      let newnode = document.createElement("footer");
      newnode.innerHTML = result;
      newnode.classList.add("bg-light");
      newnode.classList.add("text-center");
      newnode.classList.add("text-white");
      parentNode.replaceChild(newnode, footer_placeholder);
    }
  });
});
