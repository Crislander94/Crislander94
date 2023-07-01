import { ActionButtonProducts } from "../components/Product/ActionButtonProducts";

export const columns = [
    {
        name: 'Name Product',
        selector: row => row.name,
    },
    {
        name: 'Count',
        selector: row => row.count,
    },
    {
        name: 'Customer',
        selector: row => row.customer
    },
    {
        name: 'Price Sale',
        selector: row => row.price
    },
    {
        name: 'Created_at',
        selector: row => row.created_at
    },
    {
        name: 'Action',
        grow:  2,
        selector: row => row.action
    }
];

export const data = [
    {
        id: 1,
        name: 'Plumas',
        count: 3,
        customer: 'Anny',
        price: '$'+5.00,
        created_at: new Date().toDateString(),
        action: <ActionButtonProducts id={1} />
    },
    {
        id: 2,
        name: 'Marcadores 10 unidades',
        count: 4,
        customer: 'Cristhian',
        price: '$'+5.00,
        created_at: new Date().toDateString(),
        action: <ActionButtonProducts id={2} />
    },
    {
        id: 3,
        name: 'Fomix surtido 10 unidades',
        count: 5,
        customer: 'Lily',
        price: '$'+4.00,
        created_at: new Date().toDateString(),
        action: <ActionButtonProducts id={3} />
    }
];