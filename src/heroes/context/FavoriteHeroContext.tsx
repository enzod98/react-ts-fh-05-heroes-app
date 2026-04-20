import { createContext, useEffect, useState, type PropsWithChildren } from "react";
import type { Hero } from "../interfaces/hero.interface"


interface FavoriteHeroContext {
    //State
    favorites: Hero[];
    favoriteCount: number;

    //Methods
    toggleFavorite: (hero: Hero) => void;
    isFavorite: (hero: Hero) => boolean;
}

export const FavoriteHeroContext = createContext({} as FavoriteHeroContext);

const getFavoritesFromLocalStorage = ():Hero[] => {
    const favorites = localStorage.getItem("favorite");
    return favorites ? JSON.parse(favorites) : [];
}

export const FavoriteHeroProvider = ({children}: PropsWithChildren) => {
    const [favorites, setFavorites] = useState<Hero[]>(getFavoritesFromLocalStorage);

    const toggleFavorite = (hero: Hero) => {
        const heroExist = favorites.find(h => h.id === hero.id);
        if(heroExist){
            setFavorites(favorites.filter(h => h.id !== hero.id));
            return;
        }
        setFavorites([...favorites, hero]);
    }

    const isFavorite = (hero: Hero) => favorites.some(h => h.id === hero.id);

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }, [favorites]);
    
  return (
    <FavoriteHeroContext
        value={{
            favorites,
            favoriteCount: favorites.length,
            isFavorite,
            toggleFavorite

        }}>
            {children}
    </FavoriteHeroContext>
)
}


