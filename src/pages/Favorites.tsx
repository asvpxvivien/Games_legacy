import { useState } from "react";
import { motion } from "framer-motion";
import { games } from "../data/games";
import { useFavorites } from "../contexts/FavoritesContext";
import { GameCard } from "../components/GameCard";
import { GameModal } from "../components/GameModal";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Heart } from "lucide-react";
import type { Game } from "../data/games";

const Favorites = () => {
  const { favorites } = useFavorites();
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);

  const favoriteGames = games.filter(game => favorites.includes(game.id));

  // Stats
  const genreCount = favoriteGames.reduce((acc, game) => {
    game.genre.forEach(g => {
      acc[g] = (acc[g] || 0) + 1;
    });
    return acc;
  }, {} as Record<string, number>);

  const topGenre = Object.entries(genreCount).sort((a, b) => b[1] - a[1])[0];

  const yearCount = favoriteGames.reduce((acc, game) => {
    acc[game.year] = (acc[game.year] || 0) + 1;
    return acc;
  }, {} as Record<number, number>);

  const topYear = Object.entries(yearCount).sort((a, b) => b[1] - a[1])[0];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="text-gradient-primary">Mes Favoris</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              {favoriteGames.length} {favoriteGames.length > 1 ? "légendes" : "légende"} dans ta collection
            </p>
          </motion.div>

          {favoriteGames.length > 0 ? (
            <>
              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
              >
                <div className="glass-card p-6 rounded-xl text-center">
                  <div className="text-4xl font-bold text-primary mb-2">
                    {favoriteGames.length}
                  </div>
                  <div className="text-muted-foreground">Jeux favoris</div>
                </div>

                {topGenre && (
                  <div className="glass-card p-6 rounded-xl text-center">
                    <div className="text-4xl font-bold text-primary mb-2">
                      {topGenre[0]}
                    </div>
                    <div className="text-muted-foreground">Genre préféré</div>
                  </div>
                )}

                {topYear && (
                  <div className="glass-card p-6 rounded-xl text-center">
                    <div className="text-4xl font-bold text-primary mb-2">
                      {topYear[0]}
                    </div>
                    <div className="text-muted-foreground">Année favorite</div>
                  </div>
                )}
              </motion.div>

              {/* Games Grid */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              >
                {favoriteGames.map((game, index) => (
                  <GameCard
                    key={game.id}
                    game={game}
                    onClick={() => setSelectedGame(game)}
                    index={index}
                  />
                ))}
              </motion.div>
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-20"
            >
              <div className="glass-card p-12 rounded-2xl max-w-2xl mx-auto">
                <Heart className="w-24 h-24 mx-auto mb-6 text-muted-foreground" />
                <h2 className="text-3xl font-bold mb-4">Aucun favori pour l'instant</h2>
                <p className="text-muted-foreground mb-8">
                  Commence à ajouter tes jeux préférés en cliquant sur le cœur ❤️
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </main>

      <Footer />

      {/* Game Modal */}
      <GameModal
        game={selectedGame}
        isOpen={!!selectedGame}
        onClose={() => setSelectedGame(null)}
      />
    </div>
  );
};

export default Favorites;