import React from 'react';
import { Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { ContainerForm , TitleForm } from '../../styled-components/styled-forms';
const AddSell  = () => {
    const onSubmit = (e) => {
        e.preventDefault();
    }

    //TODO: APLICAR MATERIAL UI FORM.
    return(
        <ContainerForm>
            <form onClick={onSubmit}>
                <TitleForm>Add Sell</TitleForm>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            maxLength="3"
                            color='warning'
                            id="filled-number"
                            label="Count"
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            autocomplete="off"
                            variant="filled"
                            placeholder="Product Count" />
                    </Grid>

                    <Grid item xs={12}>
                        <InputLabel id="demo-simple-select-label">Products</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            color='warning'
                            fullWidth
                            value={1}
                            // label="Products"
                            // onChange={handleChange}
                        >
                            <MenuItem value={1}>Product 1</MenuItem>
                            <MenuItem value={2}>Product 2</MenuItem>
                            <MenuItem value={3}>Product 3</MenuItem>
                        </Select>
                    </Grid>

                    <Grid item xs={12}>
                        <InputLabel id="demo-simple-select-label">User</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            fullWidth
                            value={1}
                            color='warning'
                            // label="Products"
                            // onChange={handleChange}
                        >
                            <MenuItem value={1}>User 1</MenuItem>
                            <MenuItem value={2}>User 2</MenuItem>
                            <MenuItem value={3}>User 3</MenuItem>
                        </Select>
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            id="filled-multiline-static"
                            label="Comment"
                            multiline
                            color='warning'
                            rows={4}
                            fullWidth
                            placeholder="Comment here"
                            variant="filled"
                        />
                    </Grid>

                    <Grid item xs={12} sx={{display: 'flex', justifyContent: 'flex-end'}}>
                        <Button
                            variant="contained"
                            color="warning"
                            type='submit'
                        >Send Sell</Button>
                    </Grid>
                    
                </Grid>
            </form>
        </ContainerForm>)
}



export default AddSell;