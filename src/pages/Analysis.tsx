import { motion } from "framer-motion";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Badge } from "../components/ui/badge";
import { TrendingUp, Users, Award, Gamepad2 } from "lucide-react";

const Analysis = () => {
  const articles = [
    {
      id: 1,
      title: "L'Ascension des Souls-like",
      icon: TrendingUp,
      description: "De Dark Souls à Elden Ring, comment FromSoftware a créé et dominé un genre entier, inspirant des dizaines de studios à travers le monde.",
      tags: ["Tendance", "Action-RPG"],
      color: "from-cyan-500 to-blue-500"
    },
    {
      id: 2,
      title: "L'Âge d'Or des RPG Narratifs",
      icon: Award,
      description: "The Witcher 3, Baldur's Gate 3, Persona 5 : une décennie où l'écriture et les choix narratifs ont atteint des sommets inégalés.",
      tags: ["Narration", "RPG"],
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      title: "Indie Games : La Révolution Créative",
      icon: Gamepad2,
      description: "Cuphead, Hades, Celeste : comment les studios indépendants ont redéfini l'innovation et prouvé que la taille ne fait pas tout.",
      tags: ["Indie", "Innovation"],
      color: "from-orange-500 to-red-500"
    },
    {
      id: 4,
      title: "Le Streaming et la Culture Gaming",
      icon: Users,
      description: "Twitch, YouTube Gaming, et l'esport ont transformé le jeu vidéo en spectacle mondial, créant de nouvelles stars et communautés.",
      tags: ["Culture", "Communauté"],
      color: "from-green-500 to-emerald-500"
    }
  ];

  const studios = [
    {
      name: "FromSoftware",
      games: ["Bloodborne", "Sekiro", "Elden Ring"],
      impact: "Maîtres incontestés du Souls-like"
    },
    {
      name: "Nintendo",
      games: ["Zelda: BotW", "Zelda: TotK"],
      impact: "Réinvention constante de leurs licences"
    },
    {
      name: "CD Projekt Red",
      games: ["The Witcher 3"],
      impact: "Nouvelle référence du RPG occidental"
    },
    {
      name: "Larian Studios",
      games: ["Baldur's Gate 3"],
      impact: "CRPG porté à son apogée"
    }
  ];

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
              <span className="text-gradient-primary">Analyse de la Décennie</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Tendances, révolutions et studios qui ont marqué le gaming moderne
            </p>
          </motion.div>

          {/* Articles Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20"
          >
            {articles.map((article, index) => {
              const IconComponent = article.icon;
              return (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="glass-card rounded-xl overflow-hidden cursor-pointer group"
                >
                  <div className={`h-3 bg-gradient-to-r ${article.color}`} />
                  <div className="p-8">
                    <IconComponent className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {article.description}
                    </p>
                    <div className="flex gap-2">
                      {article.tags.map(tag => (
                        <Badge key={tag} variant="outline">{tag}</Badge>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Studios Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl font-bold mb-8 text-center">
              <span className="text-gradient-primary">Studios Légendaires</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {studios.map((studio, index) => (
                <motion.div
                  key={studio.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="glass-card p-6 rounded-xl text-center"
                >
                  <h3 className="text-xl font-bold mb-3 text-primary">
                    {studio.name}
                  </h3>
                  <div className="mb-4">
                    {studio.games.map(game => (
                      <Badge key={game} variant="outline" className="mb-1 mr-1 text-xs">
                        {game}
                      </Badge>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground italic">
                    {studio.impact}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Timeline Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 rounded-2xl"
          >
            <h2 className="text-4xl font-bold mb-8 text-center">
              <span className="text-gradient-primary">Évolution Culturelle</span>
            </h2>

            <div className="space-y-8">
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-2xl font-bold mb-2">L'Explosion du Streaming</h3>
                <p className="text-muted-foreground">
                  Twitch et YouTube Gaming transforment le jeu vidéo en divertissement de masse. Les streamers deviennent des stars, et les jeux sont conçus avec le streaming en tête.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-2xl font-bold mb-2">L'Esport Professionnel</h3>
                <p className="text-muted-foreground">
                  Overwatch League, Dota 2 TI, League of Legends Worlds : l'esport atteint des audiences de millions de spectateurs et des prize pools record.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-2xl font-bold mb-2">Diversité et Inclusion</h3>
                <p className="text-muted-foreground">
                  Le gaming devient plus inclusif : représentation LGBTQ+, personnages féminins puissants, et narrations matures qui brisent les stéréotypes.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-2xl font-bold mb-2">Cross-Platform & Cloud Gaming</h3>
                <p className="text-muted-foreground">
                  Le jeu entre amis transcende les plateformes. Game Pass, PS Plus, cloud gaming : de nouveaux modèles émergent et démocratisent l'accès.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Analysis;