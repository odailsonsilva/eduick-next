import MediaMatch from 'components/molecules/MediaMatch'
import { ReactSVG } from 'react-svg'
import * as S from './styles'

type Props = {
  username?: string
}

export const ContainerInfos = ({ username = 'Student' }: Props) => {
  return (
    <S.Wrapper>
      <MediaMatch greaterThan="medium">
        <ReactSVG src="/illustrations/detail-containerinfo.svg" />
      </MediaMatch>

      <div className="container__left">
        <div className="container__left__top">
          <h2>
            Hello <strong>{username}</strong>
            <span>.</span>
          </h2>

          <ReactSVG src="/illustrations/detail-containerinfo.svg" />
        </div>

        <div className="container__left__bottom">
          <p>
            Whether you are a student trying to find your ideal private language
            teachers/tutors
          </p>
        </div>
      </div>

      <MediaMatch greaterThan="medium">
        <div className="container__right">
          <img src="/images/detail-containerinfo-2.png" alt="" />
        </div>
      </MediaMatch>
    </S.Wrapper>
  )
}
