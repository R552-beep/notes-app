const notesModel = require('./notesModel');

describe("notesModel", () => {
  const model = new notesModel();

  it("getNotes initially returns an empty array", () => {
    expect(model.getNotes()).toEqual([]);
  });

  it("addNote adds a note to the array", () => {
    model.addNote("Buy milk");
    model.addNote("Go to the gym");
    expect(model.getNotes()).toEqual(['Buy milk', 'Go to the gym']);
  });

  it("reset empties the array", () => {
    expect(model.getNotes()).toEqual(['Buy milk', 'Go to the gym']);
    model.reset();
    expect(model.getNotes()).toEqual([]);
  });
});