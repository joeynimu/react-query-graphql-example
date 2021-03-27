import Head from "next/head";
import { useQuery } from "react-query";
import { useGetPastLaunchesQuery } from "../generated/graphql";

export default function Home() {
  const { isLoading, data, isError, error } = useGetPastLaunchesQuery();

  return (
    <div className="container">
      <Head>
        <title>React Query + Graphql + Graphlq Codegen = Awsomeness</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h3>SPaceX past Launches</h3>
      {isLoading && <p>Fetching launches....</p>}
      {isError && <p>{error}</p>}
      {!isLoading && !isError && data?.launchesPast.length > 0 && (
        <ul>
          {data?.launchesPast.map(({ mission_name, launch_date_local }) => (
            <li key={launch_date_local}>{mission_name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
