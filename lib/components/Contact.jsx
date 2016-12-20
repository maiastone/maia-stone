import React from 'react';
import Header from './Header.jsx';

const Contact = () => {
  return (
    <div className="Contact">
      <Header />
      <form className='contact-form'>
        <input className='contact-input'
         placeholder='name'></input>
        <input className='contact-input'
          placeholder='email'></input>
        <textarea className='contact-input text'
        placeholder='comments'></textarea>
      </form>
    </div>
  );
};

export default Contact;
