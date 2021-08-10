import React from 'react'
import Image from 'next/image'

import { Button } from 'components/atoms/Button'
import { Input } from 'components/atoms/Input'
import Radio from 'components/atoms/Radio'
import { Header } from 'components/Header'

import * as S from './styles'
import MediaMatch from 'components/MediaMatch'

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

  return (
    <S.Wrapper>
      <S.Content>
        <Header links={linksHeader} buttonText="Get Started" />

        <S.Container isOpen={open}>
          <S.WrapperIllustration>
            <MediaMatch lessThan="medium">
              <img src="/illustrations/detail-mobile.svg" alt="" />
            </MediaMatch>

            <MediaMatch greaterThan="medium">
              <img src="/illustrations/detail-lp-1.svg" alt="" />
            </MediaMatch>
          </S.WrapperIllustration>

          <S.WrapperForm>
            <h1>
              Find your <br /> <span>best teacher</span>
            </h1>

            <S.Form className="wrapper__form">
              <div className="form__input">
                <Input placeholder="Type here what are you looking for" />
              </div>

              <div className="form__radio">
                <Radio defaultValue="1" options={optionsRadio} />
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

      <S.Footer />
    </S.Wrapper>
  )
}
