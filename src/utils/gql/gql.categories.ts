import { gql } from '@apollo/client';

export const GET_CATEGORIES = gql`
    query {
        categories {
            id
            title
            items {
                id
                name
                imageURL
                price
                tags
                description
                releaseDate
            }
        }
    }
`;

export const GET_CATEGORY = gql`
    query ($title: String!) {
        category(title: $title) {
            id
            title
            items {
                id
                name
                imageURL
                price
                tags
                description
                releaseDate
            }
        }
    }
`;