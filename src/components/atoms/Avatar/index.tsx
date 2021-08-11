import Image from 'next/image'

import * as S from './styles'

export type AvatarProps = {
  size?: 'small' | 'large'
  src?: string
}

export const Avatar = ({
  size = 'small',
  src = '/images/profile.png'
}: AvatarProps) => {
  return (
    <S.Wrapper size={size}>
      <img src={src} />
    </S.Wrapper>
  )
}
