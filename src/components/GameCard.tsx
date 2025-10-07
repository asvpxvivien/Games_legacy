import { motion } from "framer-motion";
import { Game } from "../data/games";
import { Badge } from "./ui/badge";
import { Sparkles } from "lucide-react";

interface GameCardProps {
  game: Game;
  onClick: () => void;
  index: number;
}

export const GameCard = ({ game, onClick, index }: GameCardProps) => {
  const impactColors = {
    "Légendaire": "glow-cyan",
    "Iconique": "glow-purple",
    "Inoubliable": "glow-magenta",
    "Culte": "border-accent"
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10, scale: 1.02 }}
      onClick={onClick}
      className={`glass-card rounded-xl overflow-hidden cursor-pointer group transition-all duration-300 ${impactColors[game.impact]}`}
    >
      {/* Image */}
      <div className="relative aspect-[2/3] overflow-hidden bg-muted">
        <img
          src={game.cover}
          alt={game.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Impact badge */}
        <div className="absolute top-3 right-3">
          <Badge variant="secondary" className="flex items-center gap-1 backdrop-blur-sm">
            <Sparkles className="w-3 h-3" />
            {game.impact}
          </Badge>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
          {game.title}
        </h3>
        
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm text-muted-foreground font-medium">{game.studio}</span>
          <span className="text-sm font-bold text-primary">{game.year}</span>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {game.genre.slice(0, 2).map((genre) => (
            <Badge key={genre} variant="outline" className="text-xs">
              {genre}
            </Badge>
          ))}
        </div>
      </div>
    </motion.div>
  );
};