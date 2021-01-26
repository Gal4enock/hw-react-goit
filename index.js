const argv = require('yargs').argv;

// import some from 'yargs';
// argv = some.argv;

const { listContacts, getContactById, removeContact, addContact } = require ('./contacts.js');
// import { listContacts, getContactById, removeContact, addContact } from './contacts.js';


function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case 'list':
      listContacts()
      break;

    case 'get':
      // contacts.getContactById(id)
      getContactById(id)
      break;

    case 'add':
      // contacts.addContact(name, email, phone)
      addContact(name, email, phone)
      break;

    case 'remove':
      removeContact(id)
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

invokeAction(argv);