import { HeroStats } from '@/heroes/components/HeroStats';
import { CustomJumbotron } from '../../../components/custom/CustomJumbotron';
import { SearchControls } from './ui/SearchControls';
import { CustomBreadcrumb } from '@/components/custom/CustomBreadcrumb';

export default function SearchPage() {
  return (
    <>
      <CustomJumbotron 
              title="Búsqueda de SuperHeroes" 
              description="Descubre y administra héroes y villanos" />

      <CustomBreadcrumb currentPage='Buscador de héroes' 
        breadcrumb={
          [
            {
              to: '/',
              label: 'Home2'
            },
            {
              to: '/',
              label: 'Home4'
            },
            {
              to: '/',
              label: 'Home8'
            },
          ]
        }
      />


      <HeroStats />
       {/* Filter and search */}

       <SearchControls />
    </>
  )
}
// export default SearchPage;