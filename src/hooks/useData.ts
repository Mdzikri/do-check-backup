import { graphql, useStaticQuery } from "gatsby";
import { first } from "lodash";
import { useEffect } from "react";

interface ICommonStruct {
  id: number;
  title: string;
  value: string;
  imgSrc: any;
}

interface ICommonAlternativeStruct {
  id: number;
  title: string;
  src: any;
  description: string;
}

interface Data {
  featureItem: ICommonStruct[][];
  newsItem: ICommonStruct[][];
  timelineItem: ICommonAlternativeStruct[][];
  ourValues: ICommonAlternativeStruct[][];
  featureSecondItem: {
    id: number;
    title: string;
    value: string;
    color: string;
    icon: any;
  }[];
  analyticsBusiness: {
    id: number;
    title: string;
    value: string;
    description: string;
  }[];
}

interface QueryJson<T> {
  allDataYaml: {
    nodes: T;
  };
}

interface QueryData extends QueryJson<Data[]> { }

export default function useData() {
  const data: QueryData = useStaticQuery(graphql`
    query {
      allDataYaml {
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
          timelineItem {
            id
            title
            src
            description
          }
          ourValues {
            id
            title
            src
            description
          }
          featureSecondItem {
            id
            title
            value
            color
            icon
          }
          analyticsBusiness {
            id
            title
            value
            description
          }
        }
      }
    }
  `);

  return {
    data: first(data.allDataYaml.nodes),
  };
}
