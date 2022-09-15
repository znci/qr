url.style.visibility = 'hidden';
 content = document.getElementById("content")

 content.innerHTML = `<button class="btn btn-primary" type="button" onClick="begin()">Begin</button>`

 function begin() {
 	console.log('test')
 	content.innerHTML = `
 	<p class="h4-mktg">Let's do this!</p>
 	<p class="f3">Waiting<span class="AnimatedEllipsis"></span></p>
 	`
 	setTimeout(function() {
 		console.log('cooldown')
 		url.style.visibility = 'visible';
 		content.innerHTML = `

 		<button class="btn btn-outline" type="button" onclick="stage2()">Next</button>
 		`
 	  }, 1500);
 }

 function stage2() {
 	url.style.visibility = 'hidden';
 	content.innerHTML = `
 	<p class="h4-mktg">Almost there!</p>
 	<p class="f3">Generating<span class="AnimatedEllipsis"></span></p>
 	`
 	setTimeout(function() {
 		content.innerHTML = ``
 		var manurl = document.getElementById("url").value;
 		var qrcode = new QRCode(document.getElementById("content"), {
 			text: `${manurl}`,
 			width: 256,
 			height: 256,
 			colorDark : "#000000",
 			colorLight : "#ffffff",
 			correctLevel : QRCode.CorrectLevel.H
 		});
 	})

 }


