import React, { useEffect, useMemo, useState } from 'react';
import DataTableBases from './common/DataTableBases.js';
import Filtercomponent from './common/Filtercomponent.js';
import { Button } from '@mui/material';

const columns = [
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
        selector: row => row.action
    }
];

const data = [
    {
        id: 1,
        name: 'Plumas',
        mark: 'Bic',
        stock: 5,
        price_per_unit: '$'+1.00,
        price: '$'+5.00,
        created_at: new Date().toDateString(),
        created_user: 'Cristhian',
        action: <Button data-id={'1'} onClick={e => console.log(e.target.id)}>Ver</Button>
    },
    {
        id: 2,
        name: 'Marcadores 10 unidades',
        mark: 'Faber Castell',
        stock: 5,
        price_per_unit: '$'+1.00,
        price: '$'+5.00,
        created_at: new Date().toDateString(),
        created_user: 'Cristhian'
    },
    {
        id: 3,
        name: 'Fomix surtido 10 unidades',
        mark: 'Norma',
        stock: 4,
        price_per_unit: '$'+1.00,
        price: '$'+4.00,
        created_at: new Date().toDateString(),
        created_user: 'Cristhian'
    }
];

const ListProducts = () => {
    const [filterText, setFilterText] = useState('');
    const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
    const [rows, setRows] = useState([]);
    useEffect( () => {
        setTimeout( () => { setRows(data)}, 10);
    }, []);
    
    const filteredItems = rows.filter(
		item => item.name && item.name.toLowerCase().includes(filterText.toLowerCase()),
	);

    const subHeaderComponentMemo = useMemo(() => {
		const handleClear = () => {
			if (filterText) {
				setResetPaginationToggle(!resetPaginationToggle);
				setFilterText('');
			}
		};

		return (
			<Filtercomponent
                onFilter={e => setFilterText(e.target.value)} 
                onClear={handleClear}
                filterText={filterText} 
            />
		);
	}, [filterText, resetPaginationToggle]);


    return (
        <DataTableBases 
            columns={columns}
            data={filteredItems}
            selectableRows
			paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
            subHeader
			subHeaderComponent={subHeaderComponentMemo}
        />
    );
}

export default ListProducts;