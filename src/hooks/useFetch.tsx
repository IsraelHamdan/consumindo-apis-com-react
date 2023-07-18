// import { useEffect, useState } from "react";
// import axios from "axios";

// const api = axios.create({
//   baseURL: "https://api.github.com",
// });

// export function useFetch<T = unknown>(url: string) {
//   const [data, setData] = useState<T | null>(null);
//   const [isFetching, setIsFetching] = useState(true);

//   useEffect(() => {
//     const fetchRepo = () => {
//       api
//         .get<T>(url)
//         .then((response) => {
//           setData(response.data);
//         })
//         .finally(() => {
//           setIsFetching(false);
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//     };
//     fetchRepo();
//   }, []);

//   return { data, isFetching };
// }
