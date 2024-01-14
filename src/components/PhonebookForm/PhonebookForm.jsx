import { Component } from 'react';
import { nanoid } from 'nanoid';
import css from './phonebook-form.module.css';

const INITIAL_STATE = {
  name: '',
};

class PhonebookForm extends Component {
  state = {
    ...INITIAL_STATE,
  };

  HandleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  HandleSubmit = e => {
    e.preventDefault();
    // const { elements } = e.currentTarget;
    this.setState({ ...INITIAL_STATE });
    console.log(this.state);
  };

  contactNameId = nanoid();
  render() {
    const { contactNameId, numberId, HandleSubmit, HandleChange } = this;
    const { name } = this.state;
    return (
      <div className={css.wrapper}>
        <h1 className={css.title}>Phonebook</h1>
        <form onSubmit={HandleSubmit} className={css.form}>
          <div className={css.formGroup}>
            <label htmlFor={contactNameId}>Name</label>
            <input
              value={name}
              onChange={HandleChange}
              id={contactNameId}
              type="text"
              name="name"
              required
              placeholder="Contact name"
            />
            <label htmlFor={numberId}>Number</label>
            <input id={numberId} type="tel" name="number" required />
          </div>
          <button className={css.button} type="submit">
            Add contact
          </button>
        </form>
      </div>
    );
  }
}

export default PhonebookForm;
