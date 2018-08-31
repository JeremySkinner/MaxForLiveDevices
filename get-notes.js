setinletassist(0,"name");
setoutletassist(0,"notes");
currentNotesFilename = "";
currentNotesText = "";

function anything() {
	var a = arrayfromargs(messagename,arguments);
    

var filename = messagename;
filename = filename.trim();
 filename = this.patcher.filepath.replace("Scene Info.amxd", "Notes/" + filename + ".txt");
post(filename, "\n");
 //   var filename = "Desktop:/" + messagename.replace(" ", "_") + ".txt";
    //post(filename, "\n");

    var file = new File(filename);
	var line;
    var output = "";

    if (file.isopen) {

		while ((line = file.readline()) != null) { // returns a string
		    output += line + "\n";
		}
		file.close();
    }

    currentNotesFilename = filename;
    currentNotesText = output;

    post(output, "\n");
    outlet(0, output);
}
