import React from 'react'
import Image from 'next/image'

import * as S from './styles'

export type AvatarProps = {
  size?: 'small' | 'large'
  src?: string
}

export const Avatar = ({ size = 'small', src }: AvatarProps) => {
  const [photo, setPhoto] = React.useState('/images/profile.png')

  React.useEffect(() => {
    if (src) setPhoto(src)
  }, [src])

  return (
    <S.Wrapper size={size}>
      <Image src={photo} alt="Profile" layout="fill" objectFit="cover" />
    </S.Wrapper>
  )
}
