import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';

const Filtercomponent = ({filterText, onFilter, handleClear}) => {

    return (
        <Paper
            component="form"
            sx={{ m: '10px 0px 0px 0px', p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
        >
            <InputBase
                sx={{ ml: 1, flex: 1}}
                placeholder="Search Name"
                value={filterText}
                onChange={onFilter}
                onKeyUp={handleClear}
            />
        </Paper>
    );
}

export default Filtercomponent;