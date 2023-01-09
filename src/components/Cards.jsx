import React from 'react'
import Card from './Card'

const Cards = ({cards}) => {

  return (
    <div style={{ marginTop: '0.5rem' }}>
        {
           cards.map((card)=>{
                return (
                    <Card key={card.link} title={card.title} link={card.link} />
                )
           }) 
        }
    </div>
  )
}

export default Cards