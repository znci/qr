// Code rewritten by zNotChill
const contents = 
	[
		`<button class="btn btn-primary" type="button" onClick="begin()">Begin</button>`,
		`<h4>let's do this!</h4>waiting...`,
		`<button type="button" onclick="stage2()">Next</button>`,
		`<h4>almost there!</h4>Generating`,
	];
let cnum = 0;
function updContent() {
	document.getElementById("content").innerHTML = contents[cnum];
}
function pshContent() {
	cnum += 1;
	updContent();
}

url.style.visibility = 'hidden';
content = document.getElementById("content")

updContent()

function begin() {
	pshContent();
	setTimeout(function() {
		console.log('cooldown')
		url.style.visibility = 'visible';
		pshContent();
	}, 1500);
}

async function stage2() {
	url.style.visibility = 'hidden';
	pshContent();
	setTimeout(function() {
		content.innerHTML = ``
		var manurl = document.getElementById("url").value;
		var qrcode = new QRCode(document.getElementById("content"), {
			text: `${manurl}`,
			width: 256,
			height: 256,
			colorDark : "#ffffff",
			colorLight : "#1e1e1e",
			correctLevel : 2
		});
		setTimeout(async () => {
			const img = document.getElementById("content").querySelector("img")
			// idk it doesnt work without the timeout
			document.getElementById("content").innerHTML += `<a href="${img.src}" download=""><button type="button">Download</button></a>`
			
		}, 500);
	})
}