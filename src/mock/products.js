import { ActionButtonProducts } from "../components/Product/ActionButtonProducts";

export const columns = [
    {
        name: 'Name',
        selector: row => row.name,
    },
    {
        name: 'Mark',
        selector: row => row.mark,
    },
    {
        name: 'Stock',
        selector: row => row.stock
    },
    {
        name: 'Price Per Unit',
        selector: row => row.price_per_unit
    },
    {
        name: 'Price',
        selector: row => row.price
    },
    {
        name: 'Created_at',
        selector: row => row.created_at
    },
    {
        name: 'Created_user',
        selector: row => row.created_user
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
        mark: 'Bic',
        stock: 5,
        price_per_unit: '$'+1.00,
        price: '$'+5.00,
        created_at: new Date().toDateString(),
        created_user: 'Cristhian',
        action: <ActionButtonProducts id={1} />
    },
    {
        id: 2,
        name: 'Marcadores 10 unidades',
        mark: 'Faber Castell',
        stock: 5,
        price_per_unit: '$'+1.00,
        price: '$'+5.00,
        created_at: new Date().toDateString(),
        created_user: 'Cristhian',
        action: <ActionButtonProducts id={2} />
    },
    {
        id: 3,
        name: 'Fomix surtido 10 unidades',
        mark: 'Norma',
        stock: 4,
        price_per_unit: '$'+1.00,
        price: '$'+4.00,
        created_at: new Date().toDateString(),
        created_user: 'Cristhian',
        action: <ActionButtonProducts id={3} />
    }
];