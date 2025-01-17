'use client'
import React, { useContext } from 'react'
import Card from './Card' 
import cardData from './card-data'
import ThemeContext from '@/app/context/ThemeContext'
function Blogs() {
  const {theme} = useContext(ThemeContext)
  return (
    <div className='w-full'
    style={{
      backgroundColor:theme.bg,
      color:theme.color
    }}>
    <div
       className='w-[90%] md:w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pb-20 pt-20'>
        {cardData.map((data,index)=>(
            <Card key={index} id={data.id} image={data.image} title={data.title} tag={data.tag} date={data.date} author={data.date}/>))}
        </div>
        </div>
  )
}

export default Blogs