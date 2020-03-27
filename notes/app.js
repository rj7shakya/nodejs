const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes');

// customize yargs version
yargs.version('1.1.0');


//create add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title:{
      describe: 'Note title',
      demandOption: true,
      type:'string'
    },
    body: {
      describe:'body',
      demandOption: true,
      type:'string'
    }
  },
  handler: (argv)=>{
    notes.addNote(argv.title, argv.body)
  }
});

//create remove command
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  builder: {
    title:{
      describe: 'Note title',
      demandOption: true,
      type:'string'
    }
  },
  handler: (argv)=>{
    notes.removeNotes(argv.title);
  }
});

yargs.command({
  command:'list',
  describe: 'List all notes',
  builder:{
    title:{
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    }
  },
  handler: (argv)=>{
    console.log('Title:' +argv.title);
  }
});

yargs.command({
  command: 'read',
  describe: 'Read the note',
  handler: ()=>{
    console.log('Reading the notes');
  }
});

// console.log(yargs.argv);
yargs.parse()