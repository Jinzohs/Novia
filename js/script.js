const rubrik = ["","Häst", "Hund", "Varg"];
const texten = ["", "Hästar är majestätiska och kraftfulla djur som ofta används för ridning och arbeten på gårdar. De är sociala djur som trivs bäst i flock och behöver regelbunden motion och omvårdnad.", 
"Hundar är kända som människans bästa vän tack vare deras lojalitet och förmåga att knyta starka band med sina ägare. De kommer i många raser och storlekar, och varje ras har sina egna speciella egenskaper och behov.", 
"Vargar är intelligenta och sociala rovdjur som lever i flockar och kommunicerar genom ylanden, kroppsspråk och doftmarkeringar. De spelar en viktig roll i ekosystemet genom att hålla bytespopulationer i balans och främja biologisk mångfald."]; 
let slide = 1;
const bilder = ["","img/hast.jpg", "img/hund.jpg", "img/varg.jpg"] 

//lämnade först arrayen tom pga att då stämmer sidnr, textnr, och bildnr överens för att underlätta hjärncellerna lite


function nextSlide() {
	
	//så att sliden far till början när man blädrar förbi sista sidan
	if (slide === 3) {
		slide = slide - 3;
	}
    slide++
    
	//höja sid nummern när man trycker next
	var slideNumberElement = document.getElementById("slide-nr"); 
    slideNumberElement.textContent = "Sida " + slide;
	
	//ändra rubrik när man trycker next
	var rubrikElement = document.getElementById("slide-heading");
	rubrikElement.textContent = rubrik[slide];
	
	//ändra text när man trycker next
	var textenElement = document.getElementById("slide-text");
	textenElement.textContent = texten[slide];
	
	//ändra bild när man trycker next
	document.getElementById("slide-img").src = bilder[slide];
	
}
function prevSlide() {
     
    slide--
	
	//så att man far till sista sidan på sliden ifall man trycker på prev på första sidan
	if (slide === 0) {
		slide = slide + 3;
	}
	
	//sänka sid nummern när man trycker prev
	var slideNumberElement = document.getElementById("slide-nr");
    slideNumberElement.textContent = "Sida " + slide;
	
	//ändra rubrik när man trycker prv
	var rubrikElement = document.getElementById("slide-heading");
	rubrikElement.textContent = rubrik[slide];
	
	//ändra text när man trycker prev
		var textenElement = document.getElementById("slide-text");
	textenElement.textContent = texten[slide];
	
	//ändra bild när man trycker prev
	document.getElementById("slide-img").src = bilder[slide];
	
}
