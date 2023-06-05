import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ReposStore {
  favouriteReposIds: number[];
  addFavoriteRepo: (id: number) => void;
  removeFavoriteRepo: (id: number) => void;
}

export const useReposStore = create(
  persist<ReposStore>(
    (set) => ({
      favouriteReposIds: [],
      addFavoriteRepo: (id: number) =>
        set((state) => ({
          ...state,
          favouriteReposIds: [...state.favouriteReposIds, id],
        })),
      removeFavoriteRepo: (id: number) =>
        set((state) => ({
          ...state,
          favouriteReposIds: state.favouriteReposIds.filter((el) => el !== id),
        })),
    }),
    {
      name: "favorite-repos",
    }
  )
);
