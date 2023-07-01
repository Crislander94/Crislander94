import React from 'react'
import { useFIlterDataTable } from '../hooks/useFilterDataTable';
import DataTableBases from '../common/DataTableBases';
import { columns, data } from '../../mock/sale';


export const ListSale = () => {
  
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
