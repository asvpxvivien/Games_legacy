import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface FavoritesContextType {
  favorites: string[];
  addFavorite: (gameId: string) => void;
  removeFavorite: (gameId: string) => void;
  isFavorite: (gameId: string) => boolean;
  toggleFavorite: (gameId: string) => void;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export const FavoritesProvider = ({ children }: { children: ReactNode }) => {
  const [favorites, setFavorites] = useState<string[]>(() => {
    const saved = localStorage.getItem("gamelegacy-favorites");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("gamelegacy-favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (gameId: string) => {
    setFavorites(prev => [...prev, gameId]);
  };

  const removeFavorite = (gameId: string) => {
    setFavorites(prev => prev.filter(id => id !== gameId));
  };

  const isFavorite = (gameId: string) => {
    return favorites.includes(gameId);
  };

  const toggleFavorite = (gameId: string) => {
    if (isFavorite(gameId)) {
      removeFavorite(gameId);
    } else {
      addFavorite(gameId);
    }
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite, isFavorite, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error("useFavorites must be used within FavoritesProvider");
  }
  return context;
};
