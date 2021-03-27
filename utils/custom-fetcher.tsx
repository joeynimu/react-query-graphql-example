export const CustomFetcher = <TData, TVariables>(
  query: string
): (() => Promise<TData>) => {
  return async (variables?: TVariables) => {
    const res = await fetch("https://api.spacex.land/graphql/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    });

    const json = await res.json();

    if (json.errors) {
      const { message } = json.errors[0] || "Error..";
      throw new Error(message);
    }

    return json.data;
  };
};
