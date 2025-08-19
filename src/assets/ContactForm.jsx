import React from 'react'

const ContactForm = () => {
  return (
    <div>
      <form action="submit">
        <input type="text"  placeholder='Enter your Name'/>
        <br />
        <br />
        <input type="email"  placeholder='Enter your Email'/>
        <br />
        <br />
        <textarea name="text"  placeholder='Message'></textarea>
        <br />
        <br />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default ContactForm;