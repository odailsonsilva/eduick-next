import React from 'react'
import { Card } from 'components/molecules/Card'
import { HeaderAuth } from 'components/molecules/HeaderAuth'
import { ContainerInfos } from './ContainerInfos'

import * as S from './styles'
import { useCourses } from 'services/hooks/useCourses'

const linksHeader = [{ title: 'My Classes', href: '/' }]

export const Dashboard = () => {
  const [open, setOpen] = React.useState(false)
  const [page, setPage] = React.useState(1)

  const { isLoading, data, isFetched, error } = useCourses(page)

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
          {data?.courses.map((item, index) => (
            <Card
              key={index}
              {...item}
              lessionsTotal={item['lessions_total']}
            />
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
