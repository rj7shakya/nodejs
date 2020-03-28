const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => {
  return 'Your Notes....'
}

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNotes = notes.filter((note) =>  note.title === title);

  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body
    });
    saveNotes(notes);
    console.log(chalk.green.inverse('New note added!'));
  } else {
    console.log(chalk.red.inverse('Note title taken!'));
  }
}

const saveNotes = (notes) => {
  fs.writeFileSync('notes.json', JSON.stringify(notes));
}

const removeNotes = (title)=>{
  const notes = loadNotes();
  const remNotes = notes.filter((note)=>note.title !==title);
  saveNotes(remNotes);
  if(remNotes.length !== notes.length){
    console.log(chalk.green.inverse("Note removed"))
  }else{
    console.log(chalk.red.inverse("No note found"))
  }
}


const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }

}

const listNotes = ()=>{
  const notes = loadNotes();
  console.log(chalk.gray.inverse('Your notes'));
  notes.forEach(element => {
    console.log(element.title);
  });
}

const readNote = (title)=>{
  const notes  = loadNotes();
  const user = notes.find((user)=> user.title === title);
  if(user){
    console.log(chalk.gray.inverse(user.title));
    console.log(user.body);
  }else{
    console.log(chalk.red.inverse('No note found'));
  }
}

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNotes: removeNotes,
  listNotes: listNotes,
  readNote: readNote
};