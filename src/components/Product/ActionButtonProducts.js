import React from 'react'
import PropTypes from 'prop-types'
import { Button, ButtonGroup } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import './index.css';

export const ActionButtonProducts = ({id}) => {
    if(id === 0) throw new Error('El id es invalido')

    const watchItem = (id) => {
        console.log(id);
    }

    const editItem = (id) => {
        console.log(id);
    }

    const deleteItem = (id) => {
        console.log(id);
    }

    return (
        <ButtonGroup variant="contained" size="small" sx={{my:2}} aria-label="outlined warning button group">
            <Button sx={{px:0}} onClick={() => watchItem(id) }  startIcon={<VisibilityIcon sx={{m:0}}/>} />
            <Button sx={{px:0}} onClick={() => editItem(id) }   startIcon={<EditIcon sx={{m:0}} />} />
            <Button sx={{px:0}} onClick={() => deleteItem(id) } startIcon={<DeleteIcon sx={{m:0}} />}    color="error" />
        </ButtonGroup>
    )
}


ActionButtonProducts.propsTypes = {
    id: PropTypes.number.isRequired
}

ActionButtonProducts.defaultProps = {
    id: 0
}