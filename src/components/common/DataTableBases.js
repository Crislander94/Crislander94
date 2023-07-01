import React from 'react';
import DataTable from 'react-data-table-component';

const DataTableBases = (props) => {
    return (
        <DataTable
            pagination
            dense
            noDataComponent= {<div>No hay filas por mostrar</div>}
            // paginationComponentOptions ={
                // {   
                    // rowsPerPageText: 'Filas por pagina:',
                    // rangeSeparatorText: 'de',
                    // noRowsPerPage: false,
                    // selectAllRowsItem: false, selectAllRowsItemText: 'Todo'
                // }
            // }
            {...props}
        />
    );
}

export default DataTableBases;