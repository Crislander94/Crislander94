import React from 'react';
import DataTableBases from '../common/DataTableBases.js';
import { useFIlterDataTable } from '../hooks/useFilterDataTable.js';
import { columns, data } from '../../mock/products.js';

const ListProducts = () => {
    const {filterText, resetPaginationToggle, subHeaderComponentMemo} = useFIlterDataTable();

    const filteredItems = data.filter(
		item => item.name && item.name.toLowerCase().includes(filterText.toLowerCase())
	);

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