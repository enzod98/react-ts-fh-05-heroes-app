import {
  Heart,
} from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CustomJumbotron } from "@/components/custom/CustomJumbotron"
import { HeroStats } from "@/heroes/components/HeroStats"
import { Herogrid } from "@/heroes/components/Herogrid"
import { useEffect, useState } from "react"
import { CustomPagination } from "@/components/custom/CustomPagination"
import { CustomBreadcrumb } from "@/components/custom/CustomBreadcrumb"
import { getHeroesByPageAction } from "@/heroes/actions/get-heroes-by-page.action"
import { useQuery } from "@tanstack/react-query"


export const HomePage = () => {
  const [activeTab, setactiveTab] = useState<'all' | 'favorites' | 'heroes' | 'villains'>('all');
  // useEffect(() => {
  //   getHeroesByPage().then();
  // }, [])

  const { data } = useQuery({
    queryKey: ['heroes'], //llave para guardar el resultado
    queryFn: () => getHeroesByPageAction(), //función a disparar
    staleTime: 1000 * 60 * 5,//Tiempo de vida de la data en segundos
  })

  return (
    <>
      <>
        {/* Header */}
        <CustomJumbotron
          title="Universo de SuperHeroes"
          description="Descubre y administra héroes y villanos" />

        <CustomBreadcrumb currentPage="Super heroes" />

        {/* Stats Dashboard */}
        <HeroStats />

        {/* Tabs */}
        <Tabs value={activeTab} className="mb-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger
              value="all"
              onClick={() => setactiveTab('all')}
            >
              All (16)
            </TabsTrigger>

            <TabsTrigger
              value="favorites"
              className="flex items-center gap-2"
              onClick={() => setactiveTab('favorites')}
            >
              <Heart className="h-4 w-4" />
              Favorites (3)
            </TabsTrigger>
            <TabsTrigger value="heroes"
              onClick={() => setactiveTab('heroes')}
            >
              Heroes (12)
            </TabsTrigger>
            <TabsTrigger value="villains"
              onClick={() => setactiveTab('villains')}
            >
              Villains (2)
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            <h1>Todos los personajes</h1>
            <Herogrid />
          </TabsContent>

          <TabsContent value="favorites">
            <h1>Personajes favoritos</h1>
            <Herogrid />
          </TabsContent>

          <TabsContent value="heroes">
            <h1>Héroes</h1>
            <Herogrid />
          </TabsContent>

          <TabsContent value="villains">
            <h1>Villanos</h1>
            <Herogrid />
          </TabsContent>
        </Tabs>

        {/* Character Grid */}
        <Herogrid />

        {/* Pagination */}
        <CustomPagination totalPages={10} />
      </>
    </>
  )
}