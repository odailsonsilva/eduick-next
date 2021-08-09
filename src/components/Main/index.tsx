import * as S from './styles'

const Main = ({
  title = 'BoilerPlate',
  description = 'TypeScript, NextJS e StyleCompoentes'
}) => (
  <S.Wrapper>
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
  </S.Wrapper>
)

export default Main
