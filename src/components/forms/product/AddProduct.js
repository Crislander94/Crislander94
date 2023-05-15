import React from 'react';
import { Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { ContainerForm , TitleForm } from '../../styled-components/styled-forms';
const AddProduct  = () => {
    const onSubmit = (e) => {
        e.preventDefault();
    }

    //TODO: APLICAR MATERIAL UI FORM.
    return(
        <ContainerForm>
            <form onClick={onSubmit}>
                <TitleForm>Add Product</TitleForm>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            id="filled-basic"
                            label="Name"
                            type="text"
                            variant="filled"
                            autocomplete="off"
                            placeholder="Producjt Name" />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            id="filled-basic"
                            label="Mark"
                            type="text"
                            variant="filled"
                            placeholder="Product Mark" />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            id="filled-basic"
                            label="Stock"
                            type="text"
                            variant="filled"
                            placeholder="Product Stock" />
                    </Grid>

                    <Grid item xs={6}>
                        <TextField
                            id="filled-basic"
                            label="Price"
                            fullWidth
                            placeholder="Price"
                            variant="filled"
                        />
                    </Grid>

                    <Grid item xs={6}>
                        <TextField
                            id="filled-basic"
                            label="Price per Unit"
                            fullWidth
                            placeholder="Price per Unit"
                            variant="filled"
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            id="filled-multiline-static"
                            label="Description"
                            multiline
                            rows={4}
                            fullWidth
                            placeholder="Description here"
                            variant="filled"
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            id="filled-multiline-static"
                            label="Comment"
                            multiline
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
                        >Send Product</Button>
                    </Grid>
                    
                </Grid>
            
            </form>
        </ContainerForm>)
}

export default AddProduct;