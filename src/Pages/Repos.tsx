import { useQuery } from "react-query";
import axios from "axios";
import { Link } from "react-router-dom";

export interface Repositories {
  full_name: string;
  description: string;
}

export function Repos() {
  const { data, isFetching } = useQuery<Repositories[]>(
    "repos",
    async () => {
      const response = await axios.get<Repositories[]>(
        "https://api.github.com/users/IsraelHamdan/repos"
      );
      return response.data;
    },
    {
      staleTime: 1000 * 60, // 1 minute
    }
  );
  return (
    <ul>
      {isFetching && <p>loading...</p>}
      {data?.map((repo) => {
        return (
          <li key={repo.full_name}>
            <Link to={`repos/${repo.full_name}`}>{repo.full_name}</Link>
            <span>{repo.description}</span>
          </li>
        );
      })}
    </ul>
  );
}
