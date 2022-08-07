import { DocumentNode, print } from "graphql";

export const request = async <T>(
  query: DocumentNode,
  { variables }: { variables?: Record<keyof any, any> } = {}
): Promise<T> => {
  const graphqlRequest = {
    query: print(query),
    variables,
  };
  // @ts-ignore
  const token = import.meta.env.DATOCMS_API_TOKEN;
  const response = await fetch("https://graphql.datocms.com/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(graphqlRequest),
  });
  const { data, errors } = await response.json();
  if (errors || !data) {
    throw errors || new Error("No data returned");
  }
  return data;
};
