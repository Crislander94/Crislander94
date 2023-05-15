import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';

const Filtercomponent = (props) => {
    const {onFilter, filterText, handleClear} = props;

    return (
        <Paper
            component="form"
            sx={{ m: '10px 0px 0px 0px', p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
        >
            <InputBase
                sx={{ ml: 1, flex: 1}}
                placeholder="Search Name Product"
                inputProps={{ 'aria-label': 'search google maps' }}
                onChange={onFilter}
                value={filterText}
                onKeyUp={handleClear}
            />
        </Paper>
    );
}

export default Filtercomponent;