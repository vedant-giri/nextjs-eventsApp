import React from 'react'

import Link from 'next/link'

const AllEvents = ({ data }) => {
  return (
    <div className='events_page'>


      {data.map((env) => (
        <Link key={env.id} href={`/events/${env.id}`} passHref={true}><div className='card'><img className='image' src={env.image} alt={env.title}
        /><h2>{env.title}</h2></div></Link>
      ))}


    </div>
  )
}

export default AllEvents

