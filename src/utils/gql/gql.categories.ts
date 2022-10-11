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

export const GET_ITEM = gql`
    query ($id: Int!) {
        item(id: $id) {
            id
            name
            imageURL
            price
            tags
            description
            releaseDate
        }
    }
`;

export const GET_CART_ITEMS = gql`
    query ($ids: [Int]) {
        cartItems (ids: $ids) {
            id
            name
            imageURL
            price
            tags
            description
            releaseDate
        }
    }
  `;