import { gql } from "@apollo/client";

export const CREATE_POINT_TRANSACTION = gql`
mutation createPointTransaction($impUid: String!, $comicId: String!, $amount: Int!, $address: String!) {
    createPointTransaction(impUid: $impUid, comicId: $comicId, amount: $amount, address: $address) {
        id
    }
}
`