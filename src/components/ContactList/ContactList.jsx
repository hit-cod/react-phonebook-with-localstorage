import { Component } from 'react';
import s from './ContactList.module.css'

class ContactList extends Component {
  render() {
    const { filter, contacts, onClick } = this.props;

    return (
      <>
        <ul>
          {filter === ''
            ? contacts.map(contact => {
                return (
                  <li key={contact.id}>
                    {contact.name} {contact.number}
                    <button type="button" className={s.deleteBtn} onClick={() => onClick(contact.id)}>
                      Delete
                    </button>
                  </li>
                );
              })
            : contacts.map(contact => {
                if (contact.name.toLowerCase().includes(filter.toLowerCase())) {
                  return (
                    <li key={contact.id}>
                      {contact.name} {contact.number}
                      <button type="button" className={s.deleteBtn} onClick={() => onClick(contact.id)}>
                        Delete
                      </button>
                    </li>
                  );
                }
                return '';
              })}
        </ul>
      </>
    );
  }
}

export default ContactList;
