import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

import s from './ContactFrom.module.css'

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    
    const { name, number } = this.state;
    const { checkContact, onSubmit } = this.props;

    if (name === '') return
    if (number === '') return

    if (checkContact(name)) {
      return alert(`${name} is already in contacts.`);
    }

    onSubmit({ name, number, id: uuidv4() });
    this.reset();
  };

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  reset = () => {
    this.setState(prevState => {
      return {
        ...prevState,
        name: '',
        number: '',
      };
    });
  };

  render() {
      const { name, number } = this.state;
    return (
      <>
        <form onSubmit={this.handleSubmit} className={s.formSection}>
          <label htmlFor="nameInput">Name</label>
          <input
            type="text"
            id="nameInput"
            className={s.nameInput}
            name="name"
            value={name}
            onChange={this.handleInput}
            placeholder="Enter name .."
          />

          <label htmlFor="numberInput">Number</label>
          <input
            type="tel"
            id="numberInput"
            className={s.numberInput}
            name="number"
            value={number}
            onChange={this.handleInput}
            placeholder="Enter number .."
          />

          <br />

          <button type="submit" className={s.addBtn}>Add contact</button>
        </form>
      </>
    );
  }
}

export default ContactForm;
