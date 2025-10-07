import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Game } from "@/data/games";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Play, Heart, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useFavorites } from "@/contexts/FavoritesContext";

interface GameModalProps {
  game: Game | null;
  isOpen: boolean;
  onClose: () => void;
}

export const GameModal = ({ game, isOpen, onClose }: GameModalProps) => {
  const { isFavorite, toggleFavorite } = useFavorites();
  
  if (!game) return null;
  
  const handleToggleFavorite = () => {
    toggleFavorite(game.id);
  };

  const getYoutubeEmbedUrl = (url: string) => {
    const videoId = url.split("v=")[1]?.split("&")[0] || url.split("/").pop();
    return `https://www.youtube.com/embed/${videoId}`;
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto glass-card border-white/20">
        {/* Action buttons */}
        <div className="absolute top-4 right-14 z-10">
          <Button
            onClick={handleToggleFavorite}
            variant="ghost"
            size="icon"
            className={isFavorite(game.id) ? "text-red-500 hover:text-red-600" : "hover:text-primary"}
          >
            <Heart className={`h-5 w-5 ${isFavorite(game.id) ? "fill-current" : ""}`} />
          </Button>
        </div>

        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-gradient-primary">
            {game.title}
          </DialogTitle>
        </DialogHeader>

        <div className="grid md:grid-cols-2 gap-6 mt-4">
          {/* Left column - Image and info */}
          <div>
            <img
              src={game.cover}
              alt={game.title}
              className="w-full rounded-lg mb-4"
            />
            
            <div className="space-y-3">
              <div>
                <h4 className="text-sm font-semibold text-muted-foreground mb-1">Studio</h4>
                <p className="text-foreground">{game.studio}</p>
              </div>
              
              <div>
                <h4 className="text-sm font-semibold text-muted-foreground mb-1">Éditeur</h4>
                <p className="text-foreground">{game.publisher}</p>
              </div>
              
              <div>
                <h4 className="text-sm font-semibold text-muted-foreground mb-1">Année</h4>
                <p className="text-primary font-bold text-xl">{game.year}</p>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-muted-foreground mb-2">Impact</h4>
                <Badge variant="secondary" className="text-sm">
                  {game.impact}
                </Badge>
              </div>
            </div>
          </div>

          {/* Right column - Details */}
          <div className="space-y-6">
            <div>
              <h4 className="text-sm font-semibold text-muted-foreground mb-2">Description</h4>
              <p className="text-foreground leading-relaxed">{game.description}</p>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-muted-foreground mb-2">Genres</h4>
              <div className="flex flex-wrap gap-2">
                {game.genre.map((genre) => (
                  <Badge key={genre} variant="outline">
                    {genre}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-muted-foreground mb-2">Plateformes</h4>
              <div className="flex flex-wrap gap-2">
                {game.platforms.map((platform) => (
                  <Badge key={platform} className="bg-primary/20 text-primary border-primary/50">
                    {platform}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-muted-foreground mb-2">Tags</h4>
              <div className="flex flex-wrap gap-2">
                {game.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            {game.trailer && (
              <div>
                <h4 className="text-sm font-semibold text-muted-foreground mb-2">Trailer</h4>
                <div className="aspect-video rounded-lg overflow-hidden">
                  <iframe
                    width="100%"
                    height="100%"
                    src={getYoutubeEmbedUrl(game.trailer)}
                    title={`${game.title} Trailer`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
