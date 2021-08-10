import React from 'react'
import { Card } from 'components/molecules/Card'
import { HeaderAuth } from 'components/molecules/HeaderAuth'
import { ContainerInfos } from './ContainerInfos'

import * as S from './styles'

const linksHeader = [{ title: 'My Classes', href: '/' }]

const mockCard = [
  {
    image:
      'https://images.unsplash.com/photo-1580894732930-0babd100d356?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    rating: 3,
    lessionsTotal: 10,
    title: 'Master English: Improve Your Speaking'
  },
  {
    image:
      'https://images.unsplash.com/photo-1580894732930-0babd100d356?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    rating: 3,
    lessionsTotal: 10,
    title: 'Master English: Improve Your Speaking'
  },
  {
    image:
      'https://images.unsplash.com/photo-1580894732930-0babd100d356?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    rating: 3,
    lessionsTotal: 10,
    title: 'Master English: Improve Your Speaking'
  },
  {
    image:
      'https://images.unsplash.com/photo-1580894732930-0babd100d356?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    rating: 3,
    lessionsTotal: 10,
    title: 'Master English: Improve Your Speaking'
  },
  {
    image:
      'https://images.unsplash.com/photo-1580894732930-0babd100d356?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    rating: 3,
    lessionsTotal: 10,
    title: 'Master English: Improve Your Speaking'
  },
  {
    image:
      'https://images.unsplash.com/photo-1580894732930-0babd100d356?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    rating: 3,
    lessionsTotal: 10,
    title: 'Master English: Improve Your Speaking'
  }
]

export const Dashboard = () => {
  const [open, setOpen] = React.useState(false)

  return (
    <S.Wrapper>
      <HeaderAuth
        onClick={() => console.log('click')}
        links={linksHeader}
        buttonText="Change to teacher mode"
        themeButton="secondary"
        openChange={(val: boolean) => setOpen(val)}
      />

      {open && <div style={{ height: 166 }} />}

      <S.Container>
        <ContainerInfos />

        <S.Grid>
          {mockCard.map((item, index) => (
            <Card key={index} {...item} />
          ))}
        </S.Grid>
      </S.Container>

      <S.Footer>
        <div className="footer__content">
          <p>
            Copyright © 2020 <span>Eduick.</span>
          </p>
          <p className="footer__content__copyright">
            Todos os direitos reservados.
          </p>
        </div>
      </S.Footer>
    </S.Wrapper>
  )
}
