import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { games } from "../data/games";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { GameModal } from "../components/GameModal";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Sparkles, Shuffle } from "lucide-react";
import type { Game } from "../data/games";

const Discovery = () => {
  const [currentGame, setCurrentGame] = useState<Game | null>(null);
  const [isSpinning, setIsSpinning] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const discoverGame = () => {
    setIsSpinning(true);
    
    // Random animation delay
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * games.length);
      setCurrentGame(games[randomIndex]);
      setIsSpinning(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="text-gradient-primary">Découverte Aléatoire</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Laisse le destin choisir ton prochain chef-d'œuvre
            </p>
          </motion.div>

          {/* Discovery Machine */}
          <div className="max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              {!currentGame ? (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="text-center py-20"
                >
                  <div className="glass-card p-12 rounded-2xl glow-cyan">
                    <Sparkles className="w-24 h-24 mx-auto mb-6 text-primary animate-pulse" />
                    <h2 className="text-3xl font-bold mb-4">Prêt pour l'aventure ?</h2>
                    <p className="text-muted-foreground mb-8">
                      Clique sur le bouton pour découvrir un jeu légendaire
                    </p>
                    <Button
                      onClick={discoverGame}
                      disabled={isSpinning}
                      variant="hero"
                      size="lg"
                      className="text-xl px-12 py-6"
                    >
                      <Shuffle className="w-6 h-6 mr-2" />
                      Découvrir un jeu
                    </Button>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key={currentGame.id}
                  initial={{ opacity: 0, rotateY: -180 }}
                  animate={{ opacity: 1, rotateY: 0 }}
                  exit={{ opacity: 0, rotateY: 180 }}
                  transition={{ duration: 0.6 }}
                  className="glass-card rounded-2xl overflow-hidden glow-cyan"
                >
                  <div className="grid md:grid-cols-2 gap-8 p-8">
                    {/* Image */}
                    <motion.div
                      initial={{ scale: 0.8 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.3 }}
                      className="relative aspect-[2/3] rounded-lg overflow-hidden"
                    >
                      <img
                        src={currentGame.cover}
                        alt={currentGame.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 right-4">
                        <Badge variant="secondary" className="flex items-center gap-1 backdrop-blur-sm">
                          <Sparkles className="w-3 h-3" />
                          {currentGame.impact}
                        </Badge>
                      </div>
                    </motion.div>

                    {/* Content */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 }}
                      className="flex flex-col justify-center"
                    >
                      <h2 className="text-4xl font-bold mb-2 text-gradient-primary">
                        {currentGame.title}
                      </h2>
                      
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-xl text-primary font-bold">{currentGame.year}</span>
                        <span className="text-muted-foreground">•</span>
                        <span className="text-muted-foreground">{currentGame.studio}</span>
                      </div>

                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {currentGame.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-8">
                        {currentGame.genre.map((genre) => (
                          <Badge key={genre} variant="outline">
                            {genre}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex gap-3">
                        <Button
                          onClick={() => setShowModal(true)}
                          variant="hero"
                          size="lg"
                        >
                          Voir les détails
                        </Button>
                        <Button
                          onClick={discoverGame}
                          disabled={isSpinning}
                          variant="glass"
                          size="lg"
                        >
                          <Shuffle className="w-5 h-5 mr-2" />
                          Découvrir un autre
                        </Button>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Spinning Animation Overlay */}
            <AnimatePresence>
              {isSpinning && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-50"
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  >
                    <Sparkles className="w-24 h-24 text-primary" />
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </main>

      <Footer />

      {/* Game Modal */}
      <GameModal
        game={currentGame}
        isOpen={showModal}
        onClose={() => setShowModal(false)}
      />
    </div>
  );
};

export default Discovery;