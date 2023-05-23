import { graphql, useStaticQuery } from "gatsby";
import { first } from "lodash";

interface ICommonStruct {
  id: number;
  title: string;
  value: string;
  imgSrc: any;
}

interface Data {
  featureItem: ICommonStruct[];
  newsItem: ICommonStruct[];
}

interface QueryJson<T> {
  allDataJson: {
    nodes: T;
  };
}

interface QueryData extends QueryJson<Data[]> {}

export default function useData() {
  const data: QueryData = useStaticQuery(graphql`
    query {
      allDataJson {
        nodes {
          featureItem {
            id
            imgSrc
            title
            value
          }
          newsItem {
            id
            imgSrc
            title
            value
          }
        }
      }
    }
  `);

  return {
    data: first(data.allDataJson.nodes),
  };
}
