import React from 'react'

import { Button } from 'components/atoms/Button'
import { Input } from 'components/atoms/Input'
import Radio from 'components/atoms/Radio'
import { Header } from 'components/Header'

import * as S from './styles'
import MediaMatch from 'components/MediaMatch'
import { ModalLogin } from './ModalLogin'
import { useMediaQuery } from 'react-responsive'

const linksHeader = [
  { title: 'How it works', href: '/' },
  { title: 'About Us', href: '/' }
]

const optionsRadio = [
  { value: '1', label: "I'M A TEACHER" },
  { value: '2', label: "I'M A STUDENT" }
]

export const LandingPage = () => {
  const [open, setOpen] = React.useState(false)
  const [showModalStarted, setShowModalStarted] = React.useState(false)
  const isTabledOrMobile = useMediaQuery({ maxWidth: 767 })
  const isMobileSmall = useMediaQuery({ maxWidth: 360 })

  return (
    <S.Wrapper isOpen={open}>
      <S.Content>
        <Header
          links={linksHeader}
          buttonText="Get Started"
          openChange={(val: boolean) => setOpen(val)}
          onClick={() => setShowModalStarted(!showModalStarted)}
        />

        <S.Container>
          <S.WrapperIllustration isOpen={open}>
            {isTabledOrMobile ? (
              <img src="/illustrations/detail-mobile.svg" alt="" />
            ) : (
              <img src="/illustrations/detail-lp-1.svg" alt="" />
            )}
          </S.WrapperIllustration>

          <S.WrapperForm>
            <h1>
              Find your <br /> <span>best teacher</span>
            </h1>

            <MediaMatch greaterThan="large">
              <p>
                Whether you are a student trying to find your ideal private
                language teachers/tutors or a teacher trying to find great
                students for your customised private lessons!
              </p>
            </MediaMatch>

            <S.Form className="wrapper__form">
              <div className="form__input">
                <Input placeholder="Type here what are you looking for" />
              </div>

              <div className="form__radio">
                <Radio
                  defaultValue="1"
                  options={optionsRadio}
                  direction={isMobileSmall ? 'column' : 'row'}
                />
              </div>

              <div className="form__button">
                <Button type="button">SEARCH</Button>
              </div>
            </S.Form>
          </S.WrapperForm>
        </S.Container>
      </S.Content>

      <MediaMatch greaterThan="large">
        <div className="wrapper__form__bg">
          <img src="/illustrations/detail-lp-2.svg" alt="Illustracao 2" />
        </div>
      </MediaMatch>

      <ModalLogin
        isOpen={showModalStarted}
        onRequestClose={() => setShowModalStarted(!showModalStarted)}
      />

      <S.Footer />
    </S.Wrapper>
  )
}
