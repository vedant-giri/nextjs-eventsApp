import React from 'react'
import Header from '../header/Header'
import Footer from '../footer/footer'

const MainLayout = ({children}) => {
  return (
    <div>
      <Header/>
      <main>
        {children}
      </main>
      
      <Footer/>
    </div>
  )
}

export default MainLayout
