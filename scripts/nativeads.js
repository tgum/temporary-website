function hideadnote() {
	document.getElementById("ad-note").id = 'ad-note-hidden';
	document.getElementById("ad-note-content-wrapper").innerHTML = "";
	document.cookie = "notice-shown=true;path=/";
}

window.onload = () => {
	if (!document.cookie.includes("notice-shown")) {
		document.getElementById("ad-note-hidden").id = 'ad-note';
		document.getElementById("ad-note-content-wrapper").innerHTML = `vro you dont have an ad blocker in the big ${new Date().getFullYear() - 2000}??? get <a href=https://ublockorigin.com/>uBlock Origin</a> or something vro. <button onclick=hideadnote()>Remind me Later.</button>`;
	}
}
