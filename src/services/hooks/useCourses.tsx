import { useQuery } from 'react-query'
import { api } from '../api'

export type Course = {
  id: string
  title: string
  image: string
  lessions_total: number
  rating: number
  createdAt: string
}

type GetUsersResponse = {
  totalCount: number
  courses: Course[]
}

/**
 * CHAMA PARA API DO MIRAGE E FORMATACAO DOS DADOS
 */

export async function getCourses(page: number): Promise<GetUsersResponse> {
  const { data, headers } = await api.get('courses', {
    params: {
      page
    }
  })

  const totalCount = Number(headers['x-total-count'])

  const courses = data.courses.map((course: Course) => {
    return {
      ...course,
      createdAt: new Date(course.createdAt).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      })
    }
  })

  return {
    totalCount,
    courses
  }
}

/**
 * Data Fetching com React Query
 */

export function useCourses(page: number) {
  return useQuery(['courses', page], () => getCourses(page), {
    staleTime: 1000 * 5
  })
}
