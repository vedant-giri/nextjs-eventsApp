import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import AllEvents from '@/components/events/EventsPage'

const EventPage = ({data}) => {
  return (
    <AllEvents data={data}/>
  )
}

export default EventPage

export async function getStaticProps(){
  const {events_categories}=await import('/data/data.json');
  // console.log(events_categories);
  return{
    props:{
      data:events_categories,
    }
  }
}