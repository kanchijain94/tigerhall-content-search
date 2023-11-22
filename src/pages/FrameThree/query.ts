import { gql } from '@apollo/client';

const CARDS_QUERY = gql`
  query ExampleQuery {
    contentCards(filter: {limit: 20, keywords: "", types: [PODCAST]}) {
    edges {
    ... on Podcast {
    name
    image {
    ...Image
    }
    categories {
    ...Category
    }
    experts {
    ...Expert
    }
    }
    }
    }
   }
   fragment Image on Image {
    uri
   }
   fragment Category on Category {
    name
   }
   fragment Expert on Expert {
    firstName
    lastName
    title
    company
   }
   
`;