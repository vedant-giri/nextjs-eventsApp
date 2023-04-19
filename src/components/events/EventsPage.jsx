import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const AllEvents = ({data}) => {
  return (
    <div className='events_page'>
      
      
      {data.map((env)=>(
        <Link key={env.id} href={`/events/${env.id}`} passHref={true}><div className='card'><Image src={env.image} width={375} height={325} alt={env.title}
        /></div><h2>{env.title}</h2></Link>
      ))}
      
      
    </div>
  )
}

export default AllEvents

