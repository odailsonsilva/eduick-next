import { ReactSVG } from 'react-svg'
import * as S from './styles'

export type LogoProps = {
  activedDetails?: boolean
}

export const Logo = ({ activedDetails = false }: LogoProps) => {
  return (
    <S.Wrapper>
      {activedDetails && (
        <ReactSVG
          wrapper="div"
          src="/logos/details-logo.svg"
          aria-label="detailLogo"
        />
      )}
      <ReactSVG wrapper="div" src="/logos/logo.svg" aria-label="logo" />
    </S.Wrapper>
  )
}
