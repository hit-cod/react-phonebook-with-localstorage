import { Component } from 'react';

import ContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';
import ContactList from './components/ContactList/ContactList';

import s from './App.module.css';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const parsedContacts = JSON.parse(localStorage.getItem('contacts'));
    if (parsedContacts !== null) {
      this.setState({
        contacts: parsedContacts,
      });
    }
  }

  componentDidUpdate(prevPr, prevSt) {
    if (prevSt.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  checkContact = name => {
    return this.state.contacts.find(contact => contact.name === name);
  };

  addContact = newContact => {
    this.setState(({ contacts }) => ({
      contacts: [newContact, ...contacts],
    }));
  };

  deleteContact = id => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== id),
    }));
  };

  filterContacts = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <div className={s.container}>
        <h2>PhoneBook</h2>
        <ContactForm
          onSubmit={this.addContact}
          checkContact={this.checkContact}
        />

        <h2>Contacts</h2>

        <Filter
          filter={this.state.filter}
          contactsFilter={this.filterContacts}
        />

        <ContactList
          filter={this.state.filter}
          contacts={this.state.contacts}
          onClick={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
