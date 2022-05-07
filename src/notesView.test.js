/**
 * @jest-environment jsdom
 */

 const fs = require('fs');

 const NotesModel = require('./notesModel');
 const NotesView = require('./notesView'); 
 
 describe('Notes view', () => {
   it('displays two notes', () => {
     
    document.body.innerHTML = fs.readFileSync('./index.html');
 
     
     const model = new NotesModel();
     const view = new NotesView(model);
     model.addNote('A first note');
     model.addNote('Another one');
     
    
     view.displayNotes();
 
     
     expect(document.querySelectorAll('div.note').length).toEqual(2);
   });
  
   it('clicks the button & adds a new note',() => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const model = new NotesModel();
    const view = new NotesView(model);

    const input = document.querySelector('#add-note-input')
    input.value = 'this is a test message';

    const button = document.querySelector('#add-note-button');
    button.click();

    expect(document.querySelectorAll('div.note').length).toEqual(1);
    expect(document.querySelectorAll('div.note')[0].innerText).toEqual('this is a test message');
   });

   it('clears the list of previous notes before displaying', () => {
     
    document.body.innerHTML = fs.readFileSync('./index.html');

     const model = new NotesModel();
     const view = new NotesView(model);
     model.addNote('A first note');
     model.addNote('Another one');

     model.addNote('hello');

     view.displayNotes();
     view.displayNotes();

     expect(document.querySelectorAll('div.note').length).toEqual(3);
   });


 });

