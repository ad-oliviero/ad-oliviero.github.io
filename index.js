function get_age() {
	document.writeln(Math.trunc(((new Date().getTime() / 1000) - 1038006000) / 31709800));
}

function activate_page() {
	let elements = document.getElementsByClassName("nav-link");

	for (var i = 0; i < elements.length; i++) {
		if (elements[i].href == document.location)
			elements[i].classList.add("active");
	}
}