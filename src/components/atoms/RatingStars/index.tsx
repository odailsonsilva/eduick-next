import React from 'react'
import { RiStarFill } from 'react-icons/ri'

import * as S from './styles'

type RatingStarsProps = {
  rating: number
}

export const RatingStars = ({ rating = 0 }: RatingStarsProps) => {
  const stars = Array(5).fill(0)

  const [current, setCurrent] = React.useState(rating)
  const [hover, setHover] = React.useState<number | undefined>(undefined)

  function handleOnClick(value: number) {
    setCurrent(value)
  }

  function handleMouseOver(value: number) {
    setHover(value)
  }

  function handleMouseLeave() {
    setHover(undefined)
  }

  return (
    <S.Wrapper>
      {stars.map((_, index) => (
        <RiStarFill
          key={index}
          size="18px"
          color={(hover || current) > index ? '#FFC908' : '#C4C4C4'}
          onClick={() => handleOnClick(index + 1)}
          onMouseOver={() => handleMouseOver(index + 1)}
          onMouseLeave={handleMouseLeave}
        />
      ))}
    </S.Wrapper>
  )
}
