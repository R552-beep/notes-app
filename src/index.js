const NotesModel = require("./notesModel");
const NotesView = require("./notesView");

const model = new NotesModel();
const view = new NotesView(model);

model.addNote('This is an example note');


console.log('The notes app is running');
console.log(model.getNotes());

model.addNewNote('this is a test message')
view.displayNotes();
