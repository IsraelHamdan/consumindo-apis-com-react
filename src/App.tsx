import { useQuery } from "react-query";
import axios from "axios";

type Repositories = {
  full_name: string;
  description: string;
};

export default function App() {
  const { data, isFetching } = useQuery<Repositories[]>("repos", async () => {
    const response = await axios.get<Repositories[]>(
      "https://api.github.com/users/IsraelHamdan/repos"
    );
    return response.data;
  });
  return (
    <ul>
      {isFetching && <p>loading...</p>}
      {data?.map((repo) => {
        return (
          <li key={repo.full_name}>
            <strong>{repo.full_name}</strong>
            <span>{repo.description}</span>
          </li>
        );
      })}
    </ul>
  );
}
