import React from 'react'

import CatEvent from '@/components/events/CatEvent'

const EventsCatPage = ({data,pageName}) => <CatEvent data={data} pageName={pageName}/>
  


export default EventsCatPage

export async function getStaticPaths() {
  const { events_categories } = await import('/tmp-/data.json');
  const allPaths = events_categories.map((ev) => {
    return {
      params: {
        cat: ev.id.toString(),
      },
    };
  });
  
  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  
  const id = context?.params.cat;
  const { allEvents } = await import('/tmp-/data.json');

  const data = allEvents.filter((ev) => ev.city === id);

  return { props: { data ,pageName:id} };
}
