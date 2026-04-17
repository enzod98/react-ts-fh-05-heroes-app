import { useQuery } from "@tanstack/react-query"
import { getHeroesByPageAction } from "../actions/get-heroes-by-page.action"

export const usePaginatedHero = (page: number, limit: number, category: string = "all") => {
  return  useQuery({
      queryKey: ['heroes', { page, limit, category }], //llave para guardar el resultado
      queryFn: () => getHeroesByPageAction(+page, +limit, category), //función a disparar
      staleTime: 1000 * 60 * 5,//Tiempo de vida de la data en segundos
    })
}