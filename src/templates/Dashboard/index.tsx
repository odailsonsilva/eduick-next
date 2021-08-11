import React from 'react'

import { Card } from 'components/molecules/Card'
import { HeaderAuth } from 'components/molecules/HeaderAuth'
import { ContainerInfos } from './ContainerInfos'

import * as S from './styles'
import { Course, useCourses } from 'services/hooks/useCourses'
import { Loading } from 'components/atoms/Loading'

const linksHeader = [{ title: 'My Classes', href: '/' }]

export const Dashboard = () => {
  const [open, setOpen] = React.useState(false)
  const [page, setPage] = React.useState(1)

  const observer = React.useRef<any>(null)
  const { isLoading, data, error } = useCourses(page)

  const [courses, setCourses] = React.useState<Course[]>([])

  /**
   * OBSERVAR AS ALTERACOES DO ULTIMO ELEMENTO (div invisivel)
   * ATUALIZA O STATE PAGE E FAZ A CHAMADA A API
   */
  const lastElementRef = React.useCallback(
    (node) => {
      if (isLoading) return

      if (observer.current) observer.current.disconnect()
      observer.current = new IntersectionObserver((entries) => {
        console.log('efedfa1', entries[0])

        if (entries[0].isIntersecting) {
          setPage((prevPage) => prevPage + 1)
        }
      })

      if (node) observer.current.observe(node)
    },
    [isLoading]
  )

  React.useEffect(() => {
    if (!isLoading && data?.courses !== undefined) {
      setCourses((oldState) => [...oldState, ...data.courses])
    }
  }, [isLoading, data])

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

      <S.Container id="area-scrolled">
        <ContainerInfos />

        <>
          {!isLoading && (courses.length === 0 || error) && (
            <S.ContainerNotData>
              <img src="/illustrations/not-found.svg" alt="" />
              <h2>No courses found</h2>
            </S.ContainerNotData>
          )}
        </>

        <S.Grid>
          {courses.map((item, index) => {
            if (courses.length === index + 1) {
              /**
               * CASO SEJA ULTIMO ELEMENTO CRIA UMA DIV COM A REF(LASTELEMENT) DENTRO DO GRID
               */

              return (
                <>
                  <Card
                    key={index}
                    {...item}
                    lessionsTotal={item['lessions_total']}
                  />
                  <div
                    ref={lastElementRef}
                    style={{ width: 1, height: 1, opacity: 0 }}
                  />
                </>
              )
            } else {
              return (
                <Card
                  key={index}
                  {...item}
                  lessionsTotal={item['lessions_total']}
                />
              )
            }
          })}
        </S.Grid>

        {isLoading && (
          <S.ContainerLoading>
            <Loading />
          </S.ContainerLoading>
        )}
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
