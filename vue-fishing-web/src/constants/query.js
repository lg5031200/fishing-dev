import gql from 'graphql-tag';

export const FISHES = gql`
  query fishes($param: SearchFish) {
    fishes(param: $param) {
      id
      zh_name
      en_name
      category
      habitat
      imageSrc
      introduction
    }
  }
`;