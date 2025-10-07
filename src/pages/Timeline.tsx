import { useState } from "react";
import { motion } from "framer-motion";
import { games } from "../data/games";
import { GameCard } from "../components/GameCard";
import { GameModal } from "../components/GameModal";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import type { Game } from "../data/games";

const Timeline = () => {
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);
  const [selectedYear, setSelectedYear] = useState<number | null>(null);

  const years = Array.from(new Set(games.map(g => g.year))).sort((a, b) => b - a);
  
  const filteredGames = selectedYear 
    ? games.filter(g => g.year === selectedYear)
    : games;

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
              <span className="text-gradient-primary">Timeline Interactive</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Une décennie de légendes vidéoludiques
            </p>
          </motion.div>

          {/* Year Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-12"
          >
            <div className="flex flex-wrap justify-center gap-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedYear(null)}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  selectedYear === null
                    ? "bg-primary text-primary-foreground glow-cyan"
                    : "glass-card text-muted-foreground hover:text-foreground"
                }`}
              >
                Toutes
              </motion.button>
              {years.map((year) => (
                <motion.button
                  key={year}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedYear(year)}
                  className={`px-6 py-2 rounded-full font-semibold transition-all ${
                    selectedYear === year
                      ? "bg-primary text-primary-foreground glow-cyan"
                      : "glass-card text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {year}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Games Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filteredGames.map((game, index) => (
              <GameCard
                key={game.id}
                game={game}
                onClick={() => setSelectedGame(game)}
                index={index}
              />
            ))}
          </motion.div>
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

export default Timeline;