import { RatingStars } from 'components/atoms/RatingStars'
import {
  forwardRef,
  ForwardRefRenderFunction,
  ReactElement,
  ReactNode
} from 'react'
import * as S from './styles'

export type CardProps = {
  image: string
  rating: number
  lessionsTotal: number
  title: string
}

const CardBase: ForwardRefRenderFunction<HTMLDivElement, CardProps> = (
  { image, rating, lessionsTotal, title },
  ref
) => {
  return (
    <S.Wrapper ref={ref}>
      <S.WrapperImage>
        <img src={image} alt={title} />
      </S.WrapperImage>

      <S.WrapperInfos>
        <S.Rating>
          <RatingStars rating={rating} />
        </S.Rating>

        <S.Lessions>
          <span>
            {lessionsTotal} {lessionsTotal > 1 ? `LESSIONS` : 'LESSION'}
          </span>
        </S.Lessions>
      </S.WrapperInfos>

      <S.WrapperName>
        <h2>{title}</h2>
      </S.WrapperName>
    </S.Wrapper>
  )
}

export const Card = forwardRef(CardBase)
