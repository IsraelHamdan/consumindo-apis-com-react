import { useQueryClient } from "react-query";
import { useParams } from "react-router-dom";
import { Repositories } from "./Repos";

export function Repo() {
  const params = useParams();
  const currentlyRepo = params["*"] as string;

  const queryClient = useQueryClient();

  const handleChangeReposDescription = () => {
    const previousRepos = queryClient.getQueryData<Repositories[]>("repos");
    if (previousRepos) {
      const nextRepos = previousRepos.map((repo) => {
        if (repo.full_name === currentlyRepo) {
          return { ...repo, description: "Testando" };
        } else {
          return repo;
        }
      });
      queryClient.setQueryData("repos", nextRepos);
    }
  };

  return (
    <div>
      <h1>{currentlyRepo}</h1>
      <button onClick={handleChangeReposDescription}>
        Alterar a descrição do repo
      </button>
    </div>
  );
}
