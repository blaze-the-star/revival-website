
window.onload = function() {
	const addNav = document.querySelector('script[nav]');
	if (!addNav) {
		return;
	}

	let header = document.querySelector('header');
	let footer = document.querySelector('footer');
  	
	let prevLink = ``;
	if (addNav.hasAttribute("prev")) {
		let prev = addNav.getAttribute('prev')
		let prevUrl = `/revival-website/${prev}`.replace("/revival-website//", "/revival-website/");
		prevLink = `<a href='${prevUrl}'>&lt;&lt; Prev</a>`;
	}

	let nextLink = ``;
	if (addNav.hasAttribute("next")) {
		let next = addNav.getAttribute('next')
		let nextUrl = `/revival-website/${next}`.replace("/revival-website//", "/revival-website/");
		nextLink = `<a href='${nextUrl}'>Next &gt;&gt;</a>`;
	}

	let links = prevLink
		+ `<a href='/revival-website/1/1'>First</a>`
		+ nextLink
	let nav = `<hr><center>${links}</center><hr>`;
	
	if (header) {
		const newElement = document.createElement('p');
		newElement.innerHTML = nav;
		header.appendChild(newElement);
	}

	if (footer) {
		const newElement2 = document.createElement('p');
		newElement2.innerHTML = nav;
		footer.prepend(newElement2);
	}

};