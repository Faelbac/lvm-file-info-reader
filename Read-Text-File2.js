let infoArray = ["filePath", "operator", "date", "chaNum"];
extractContents(lvmFile, infoArray);

function extractContents(txt, namesArray){
	for (j=0; j<=namesArray.length-1; j++){
		let n0 = namesArray[j];
		let n1 = txt.substr(txt.search(n0));
		let n2 = n1.slice(n1.search("\t")+1, n1.search("\n")-1)
		console.log(n2);
		displayContents(n2,n0);
	}
};
function displayContents(txt, txtID) {
	let el = document.getElementById(txtID); 
  	el.innerHTML = txt;
};