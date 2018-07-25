// start of title animation
const title = document.getElementById("title");
	// get title or other text element
	// please give your title id or use get.elementByTagName
const titleJinglePhases = [
	// storage for different phases of animation. Using monospace text is recomended
	// starts from 0 and ends with last
	"-",
	"--",
	"=--",
	"đť™ľ=--",
	"đť™ľđťš—=--",
	"đť™ľđťš—đťšž=--",
	"đť™ľđťš—đťšžđťšŹ=-",
	"đť™ľđťš—đťšžđťšŹđťš–=",
	"đť™ľđťš—đťšžđťšŹđťš–đťš’"
];
for(t=0; t < titleJinglePhases.length; t++){
	setTimeout(function(t){
		title.innerHTML = titleJinglePhases[t];
	}, t*500,t);
	// t*500 means it will repeat every 500ms
	// Values less than 400 seems laggy.
}
// end of title animation