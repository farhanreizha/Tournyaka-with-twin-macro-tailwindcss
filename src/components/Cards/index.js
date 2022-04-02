/** @jsxImportSource @emotion/react */
import React from 'react'
import 'twin.macro'
import CardContent from './CardContent'
import CardTitle from './CardTitle'
import CardImage from './CardImage'
import Card from './Card';

const Cards = ({ image, title, children }) => {
  return (
    <div tw='flex justify-center'>
      <Card>
        <a href='#'>
          <CardImage src={image} alt='Image' />
        </a>
        <div>
          <CardTitle>{title}</CardTitle>
          <CardContent>{children}</CardContent>
        </div>
      </Card>
    </div>
  )
}

export default Cards
