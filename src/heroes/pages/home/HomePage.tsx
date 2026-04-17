import {
  Heart,
} from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CustomJumbotron } from "@/components/custom/CustomJumbotron"
import { HeroStats } from "@/heroes/components/HeroStats"
import { Herogrid } from "@/heroes/components/Herogrid"
import { CustomPagination } from "@/components/custom/CustomPagination"
import { CustomBreadcrumb } from "@/components/custom/CustomBreadcrumb"
import { useSearchParams } from "react-router"
import { useHeroSummary } from "@/heroes/hooks/useHeroSummary"
import { usePaginatedHero } from "@/heroes/hooks/usePaginatedHero"


export const HomePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const activeTab = searchParams.get('tab') ?? 'all';
  const page = searchParams.get('page') ?? '1';
  const limit = searchParams.get('limit') ?? '6';
  const category = searchParams.get('category') ?? 'aa';

  if (!['all', 'favorites', 'heroes', 'villains'].includes(activeTab))
    setSearchParams((prev) => {
      prev.set('tab', 'all');
      return prev;
    })

  const { data: summary } = useHeroSummary();
  const { data: heroesResponse } = usePaginatedHero(+page, +limit, category);

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
              onClick={() => setSearchParams((prev) => {
                prev.set('tab', 'all');
                prev.set('category', 'all');
                prev.set('page', '1');
                return prev;
              })}
            >
              All ({summary?.totalHeroes})
            </TabsTrigger>

            <TabsTrigger
              value="favorites"
              className="flex items-center gap-2"
              onClick={() => setSearchParams((prev) => {
                prev.set('tab', 'favorites');
                return prev;
              })}
              >
              <Heart className="h-4 w-4" />
              Favorites (3)
            </TabsTrigger>
            <TabsTrigger value="heroes"
              onClick={() => setSearchParams((prev) => {
                prev.set('tab', 'heroes');
                prev.set('category', 'hero');
                prev.set('page', '1');
                return prev;
              })}
              >
              Heroes ({summary?.heroCount})
            </TabsTrigger>
            <TabsTrigger value="villains"
              onClick={() => setSearchParams((prev) => {
                prev.set('tab', 'villains');
                prev.set('category', 'villain');
                prev.set('page', '1');
                return prev;
              })}
            >
              Villains ({summary?.villainCount})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            <h1>Todos los personajes</h1>
            <Herogrid heroes={heroesResponse?.heroes ?? []} />
          </TabsContent>

          <TabsContent value="favorites">
            <h1>Personajes favoritos</h1>
            <Herogrid heroes={[]} />
          </TabsContent>

          <TabsContent value="heroes">
            <h1>Héroes</h1>
            <Herogrid heroes={heroesResponse?.heroes ?? []} />
          </TabsContent>

          <TabsContent value="villains">
            <h1>Villanos</h1>
            <Herogrid heroes={heroesResponse?.heroes ?? []} />
          </TabsContent>
        </Tabs>

        {/* Character Grid */}
        <Herogrid />

        {/* Pagination */}
        <CustomPagination totalPages={ heroesResponse?.pages ?? 1 } />
      </>
    </>
  )
}