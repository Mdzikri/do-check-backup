import { graphql, useStaticQuery } from "gatsby";

interface Person {
  name: string;
  age: number;
}

interface QueryJson<T> {
    allDataJson: {
      nodes: T;
    };
}

interface QueryData extends QueryJson<Person> {}

export default function usePeople() {
  const data: QueryData = useStaticQuery(graphql`
    query {
      allDataJson {
        nodes {
          name
          age
        }
      }
    }
  `);

  return {
    data: data.allDataJson.nodes,
  };
}
