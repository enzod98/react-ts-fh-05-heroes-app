import { Badge } from "@/components/ui/badge";
import { Heart, Trophy, Users, Zap } from "lucide-react";
import { HeroStatCard } from "./HeroStatCard";
import { useHeroSummary } from "../hooks/useHeroSummary";



export const HeroStats = () => {
    const { data: summary } = useHeroSummary();

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">

            <HeroStatCard title="Total Characters" icon={<Users className="h-4 w-4 text-muted-foreground" />}>
                <div className="text-2xl font-bold">{summary?.totalHeroes}</div>
                <div className="flex gap-1 mt-2">
                    <Badge variant="secondary" className="text-xs">
                        {summary?.heroCount}
                    </Badge>
                    <Badge variant="destructive" className="text-xs">
                        {summary?.villainCount}
                    </Badge>
                </div>
            </HeroStatCard>

            <HeroStatCard title="Favorites" icon={<Heart className="h-4 w-4 text-muted-foreground" />}>
                <div className="text-lg font-bold">Batman</div>
                <p className="text-xs text-muted-foreground">Intelligence: 10/10</p>
            </HeroStatCard>

            <HeroStatCard title="Fuerte" icon={<Zap className="h-4 w-4 text-muted-foreground" />}>
                <div className="text-lg font-bold">
                    {summary?.strongestHero.name}
                </div>
                <p className="text-xs text-muted-foreground">
                    Strength: {summary?.strongestHero.strength}
                </p>
            </HeroStatCard>

            <HeroStatCard title="Inteligente" icon={<Trophy className="h-4 w-4 text-muted-foreground" />}>
                <div className="text-lg font-bold">
                    {summary?.smartestHero.name}
                </div>
                <p className="text-xs text-muted-foreground">
                    Intelligence: {summary?.smartestHero.intelligence}
                </p>
            </HeroStatCard>

        </div>
    );
};
