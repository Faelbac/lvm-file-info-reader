/** Example of Use (CODE  starts next)
<body onload="checkFileAPI();">
	<div id="container">    
			<input type="file" id="myFile0" onchange='readText(this)' />
			<br/>
			<hr/>   
			<h3>Contents of the Text file:</h3>
			<div id="main">
					...
			</div>
	</div>
</body>
*/

var reader; //GLOBAL File Reader object for demo purpose only

/** Check for the various File API support.
*/
function checkFileAPI() {
		if (window.File && window.FileReader && window.FileList && window.Blob) {
				reader = new FileReader();
				return true; 
		} else {
				alert('The File APIs are not fully supported by your browser. Fallback required.');
				return false;
		}
}

/** read text input
 */
function readText(filePath) {
	var output = ""; //placeholder for text output
	var x;
	x = "FilePath\t" + document.getElementById("myFile0").value + " ";
	if(filePath.files && filePath.files[0]) {           
		reader.onload = function (e) {
			output = x + "\n" + e.target.result;
			logContents(output);
			displayContents(output, 'content');
/**	Should be separeted:
*/
			var infoArray = ["FilePath", "Operator", "Date", "Channels"];
			extractContents(output, infoArray);
			
		};//end onload()
		reader.readAsText(filePath.files[0]);
	}//end if html5 filelist support
	
	else { //this is where you could fallback to Java Applet, Flash or similar
			return false;
	}       
	return true;
}   

/** display content using a basic HTML replacement
 */
function logContents(txt) {
	console.log(txt); //display output in Console
} 
function displayContents(txt, txtID) {
	var el = document.getElementById('myFile0-'+txtID); 
	el.innerHTML = txt;
}
function extractContents(txt, namesArray){
	for (j=0; j<=namesArray.length-1; j++){
		var n0 = namesArray[j];
		var n1 = txt.substr(txt.search(n0));
		var n2 = n1.slice(n1.search("\t")+1, n1.search("\n")-1)
		console.log(n2);
		var n3 = n0.toLowerCase();
		displayContents(n2,n3);
	}
}