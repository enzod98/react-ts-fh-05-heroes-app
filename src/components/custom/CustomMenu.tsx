import { Link, useLocation } from "react-router"
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@radix-ui/react-navigation-menu"
import { cn } from "@/lib/utils";


export const CustomMenu = () => {
    const { pathname } = useLocation();
    const isActive = (path: string) => pathname === path;

    return (    
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuLink asChild
                        className={cn(isActive('/') && 'bg-slate-200', 'p-2 rounded-md')}
                    >
                        <Link to="/">Inicio</Link> 
                    </NavigationMenuLink>
                </NavigationMenuItem>


                <NavigationMenuItem>
                    <NavigationMenuLink asChild
                        className={cn(isActive('/search') && 'bg-slate-200', 'p-2 rounded-md')}
                    >
                        <Link to="/search">Buscar Superhéroes</Link> 
                    </NavigationMenuLink>
                </NavigationMenuItem>


            </NavigationMenuList>
        </NavigationMenu>
    )
}
