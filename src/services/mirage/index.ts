import {
  createServer,
  Factory,
  Model,
  Response,
  ActiveModelSerializer
} from 'miragejs'
import faker from 'faker'

type Course = {
  title: string
  image: string
  lessionsTotal: number
  rating: number
  created_at: string
}

export function makeServer() {
  const server = createServer({
    serializers: {
      application: ActiveModelSerializer
    },

    models: {
      course: Model.extend<Partial<Course>>({})
    },

    /**
     * Criando dados em massa com o factories e dados faces com o seeds
     */

    factories: {
      course: Factory.extend({
        title(i: number) {
          return faker.name.jobArea()
        },
        image() {
          return faker.image.business()
        },
        lessionsTotal() {
          return Math.floor(Math.random() * (50 - 1)) + 1
        },
        rating() {
          return Math.floor(Math.random() * (5 - 1)) + 1
        },
        createdAt() {
          return faker.date.recent(10, new Date())
        }
      })
    },

    seeds(serverAux) {
      serverAux.createList('course', 150)
    },

    routes() {
      this.namespace = 'api'
      this.timing = 1000

      /**
       * Cria a rota atraves do Shorthands (automatiza criacao de rotas)
       * Criar a logica de paginacao
       */

      this.get('/courses', function (schema, req) {
        const { page = 1, per_page = 6 } = req.queryParams

        const total = schema.all('course').length

        const pageStart = (Number(page) - 1) * Number(per_page)
        const pageEnd = pageStart + Number(per_page)

        const users = this.serialize(schema.all('course')).courses.slice(
          pageStart,
          pageEnd
        )

        return new Response(200, { 'x-total-count': String(total) }, { users })
      })

      this.namespace = ''
      this.passthrough()
    }
  })

  return server
}
