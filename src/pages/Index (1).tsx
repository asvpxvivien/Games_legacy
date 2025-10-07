import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { motion } from "framer-motion";
import { Gamepad2, Trophy, TrendingUp } from "lucide-react";

const Index = () => {
  const stats = [
    { icon: Gamepad2, label: "Jeux Légendaires", value: "18+" },
    { icon: Trophy, label: "Années Couvertes", value: "2015-2025" },
    { icon: TrendingUp, label: "Heures de Jeu", value: "10000+" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <Hero />

      {/* Stats Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="glass-card p-8 rounded-xl text-center group"
                >
                  <IconComponent className="w-12 h-12 mx-auto mb-4 text-primary animate-glow-pulse" />
                  <h3 className="text-4xl font-bold mb-2 text-gradient-primary">
                    {stat.value}
                  </h3>
                  <p className="text-muted-foreground">{stat.label}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-card p-12 rounded-2xl text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-secondary">
              Notre Mission
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-6">
              GameLegacy célèbre une décennie exceptionnelle du jeu vidéo. De 2015 à 2025, 
              l'industrie a connu une évolution sans précédent, avec des chefs-d'œuvre qui 
              ont redéfini les genres et marqué toute une génération de joueurs.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Nous immortalisons ces légendes interactives, ces mondes qui nous ont fait 
              rêver, pleurer, et vibrer. Bienvenue dans l'histoire du gaming moderne.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;