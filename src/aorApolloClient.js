import { buildApolloClient } from 'aor-simple-graphql-client';
import gql from 'graphql-tag';

import apolloClient from './apolloClient';

export default () => buildApolloClient({
    client: apolloClient,
    queries: {
        Command: {
            GET_LIST: gql`
                query getPageOfCommands($page: Int, $perPage: Int, $sortField: String, $sortOrder: String, $filter: String) {
                    getPageOfCommands(page: $page, perPage: $perPage, sortField: $sortField, sortOrder: $sortOrder, filter: $filter) {
                        items {
                            id
                            reference
                            customer_id
                            total_ex_taxes
                            delivery_fees
                            tax_rate
                            taxes
                            total
                            status
                            returned
                            basket { product_id, quantity }
                        }
                        totalCount
                    }
                }
            `,
            GET_ONE: gql`
                query getCommand($id: ID!) {
                    getCommand(id: $id) {
                        id
                        reference
                        customer_id
                        total_ex_taxes
                        delivery_fees
                        tax_rate
                        taxes
                        total
                        status
                        returned
                        basket { product_id, quantity }
                    }
                }
            `,
            CREATE: gql`
                mutation createCommand($data: String!) {
                    createCommand(data: $data) {
                        id
                        reference
                        customer_id
                        total_ex_taxes
                        delivery_fees
                        tax_rate
                        taxes
                        total
                        status
                        returned
                        basket { product_id, quantity }
                    }
                }
            `,
            UPDATE: gql`
                mutation updateCommand($data: String!) {
                    updateCommand(data: $data) {
                        id
                        reference
                        customer_id
                        total_ex_taxes
                        delivery_fees
                        tax_rate
                        taxes
                        total
                        status
                        returned
                        basket { product_id, quantity }
                    }
                }
            `,
        },
    },
});
