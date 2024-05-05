import "./FormStyles.css"

import React from 'react'
import { useState } from 'react'

const Form = () => {

  const [form, setForm] = useState({});

  const handleForm = (e) =>{
    console.log(e.target.value, e.target.name);
    setForm({
      ...form,
      [e.target.name] : e.target.value
    })
  }

  const handleSubmit = async (e) =>{
    e.preventDefault();
    const response = await fetch('http://localhost:8080/demo', {method: 'POST',
    body: JSON.stringify(form),
    headers:{
    'Content-Type': 'application/json'
    }
  }
    )

    const data = await response.text();
    console.log(data);
  }

  return (
    <div className="form">
        <form onSubmit={handleSubmit}>
            <label>Your Name</label>
            <input type="text" name="username" onChange={handleForm}></input>
            <label>Email</label>
            <input type="email" name="mail" onChange={handleForm}></input>
            <label>Subject</label>
            <input type="text" name="subject" onChange={handleForm}></input>
            <label>Message</label>
            <textarea rows="6" placehoder="Type Your message here!"/>
            <button className="btn">Submit</button>
        </form>
    </div>
  )
}

export default Form