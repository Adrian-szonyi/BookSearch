import { gql } from '@apollo/client';

export const MY_PROFILE = gql`
  query profile {
    profile {
      _id
      username
      email
      bookCount
      savedBooks {
        authors
        description
        bookId
        image
        link
        title
      }
    }
  }
`;
