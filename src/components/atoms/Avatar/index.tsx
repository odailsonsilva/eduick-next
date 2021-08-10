import Image from 'next/image'

import * as S from './styles'

export const Avatar = () => {
  return (
    <S.Wrapper>
      <img src="/images/profile.png" />
    </S.Wrapper>
  )
}
