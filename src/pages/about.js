import React from 'react'

const AboutPage = () => {
  return (
    <div>
        <h1>About Us Page</h1>
        <p>My name is Vedant Giri. I am an individual developer.This is the learning project for next.js.</p>
        <h3>Events App</h3>
        <p>This is an event app which lets you look at different events available in different cities.These cities are Delhi,Mumbai and Bangaluru.</p>
        <ul className='about_us_list'>
        
          <li>
          <h3>Contents of Events App</h3>
            <p>This site consists of different events in cites.Each city will show you differnet events on those city.You can register for each event by providing you email address.</p>
          </li>
          
          
        </ul>
    </div>
  )
}

export default AboutPage
