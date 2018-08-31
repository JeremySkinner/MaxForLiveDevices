setinletassist(0, "text")

function bang() {
    // currentNotesFilename is a global var defined in get-notes.js
    if (currentNotesFilename) {
        post("Saving to " + currentNotesFilename + "\n");
        post(currentNotesText);
        var file = new File(currentNotesFilename, "write");
        file.writestring(currentNotesText);
        file.eof = file.position;
        file.close();
    }
}

function anything() {
    post(arguments.length);
    if (messagename == 'text') {
        if (arguments.length == 0) {
            currentNotesText = "";
        }
        else {
             currentNotesText = arguments[0];
        }
        // strip out the weird quotes that ableton puts at the beginning and end
        if (currentNotesText.length > 0) {
            if(currentNotesText[0] == '"') {
                currentNotesText = currentNotesText.substr(1);
            }
            if (currentNotesText[currentNotesText.length - 1] == '"') {
                currentNotesText = currentNotesText.substr(0, currentNotesText.length - 1);
            }
        }
        post("---Notes update---\n");
        post(currentNotesText);
        post("---End notes update\n");
    }
}