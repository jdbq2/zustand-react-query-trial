import { useFetchRepositories } from "./hooks/useRepos";
import Card from "./components/Card";
import { useReposStore } from "./store/favoriteRepos";

const App = () => {
  const { isLoading, data: repos } = useFetchRepositories("jdbq2");
  const { favouriteReposIds } = useReposStore();

  if (isLoading) {
    return <h1>LOADING....</h1>;
  }

  return (
    <div>
      {repos?.map((repo) => (
        <Card
          repository={repo}
          key={repo.id}
          isFavorite={favouriteReposIds.includes(repo.id)}
        />
      ))}
    </div>
  );
};

export default App;
