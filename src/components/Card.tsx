import { FC } from "react";
import { Repo } from "../interfaces/repo";
import { useReposStore } from "../store/favoriteRepos";

interface Props {
  repository: Repo;
  isFavorite: boolean;
}
const Card: FC<Props> = ({ repository, isFavorite }) => {
  const { addFavoriteRepo, removeFavoriteRepo } = useReposStore();

  const handleFavorite = () => {
    if (isFavorite) {
      removeFavoriteRepo(repository.id);
    } else {
      addFavoriteRepo(repository.id);
    }
  };

  return (
    <div key={repository.id}>
      <h3>{repository.name}</h3>
      <p>{repository.url}</p>
      <button onClick={handleFavorite}>
        {isFavorite ? "Dislike" : "Like"}
      </button>
    </div>
  );
};

export default Card;
