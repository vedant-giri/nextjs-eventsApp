import React, { useRef } from 'react'

import { useRouter } from 'next/router';

const SingleEvent = ({ data }) => {
  const inputEmail = useRef();


  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();
    const emailValue = inputEmail.current.value;
    const eventId = router?.query.id;
    inputEmail.current.value = "";
    try {
      const response = await fetch('/api/email_registration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: emailValue, eventId })
      });
      if (!response.ok) throw new Error(`Error:${response.status}`);
      const data = await response.json();
      console.log('POST', data);
    } catch (e) {
      console.log("ERROR", e);

    }
  };
  return (
    <div className='event_single_page'>
      <h1>{data.title}</h1>
      <div className='image_div'>
        <img className='image' src={data.image} alt={data.title}></img>
      </div>

      <p>{data.description}</p>
      <form action="" onSubmit={onSubmit} className='email_registration'>
        <label htmlFor="email">Get Registered for this event!</label>
        <input type="email" ref={inputEmail} id='email' placeholder='Enter your email here' /><button type='submit'>Submit</button>
      </form>

    </div>
  )
}

export default SingleEvent

