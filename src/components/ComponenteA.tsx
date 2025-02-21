import { useAnalytics } from '@/providers/AnalyticsContext';
import { Box, Button, Grid2, List, ListItem, TextField, Typography } from '@mui/material';
import React, { useState } from 'react'

const ComponenteA = () => {
    const { dispatch } = useAnalytics();

    const [items, setItems] = useState<string[]>(['Tarea 1', 'Tarea 2', 'Tarea 3']);
    const [newItem, setNewItem] = useState('');

    const handleAddItem = () => {
        if (newItem.trim()) {
            setItems([...items, newItem]); // Agregar el nuevo elemento a la lista
            setNewItem(''); // Limpiar el campo de texto
        }
    };
    return (
        <Box>
            <Grid2 display={'grid'} p={1}>
                <Typography>Añade un nuevo elemeno a la lista</Typography>
                <TextField
                    label="Nuevo elemento"
                    value={newItem}
                    onChange={(e) => setNewItem(e.target.value)}
                    fullWidth
                    margin="normal"
                />
                <Button type="submit" variant="contained" color="primary" onClick={handleAddItem}>
                    Añadir
                </Button>
            </Grid2>


            <Grid2 display={'grid'} p={1}>
                <Typography>Lista de elementos</Typography>

                <List>
                    {items.map((item, index) => (
                        <ListItem
                            key={index}
                            onMouseEnter={() => dispatch({ type: 'LOG_HOVER' })}
                            sx={{ cursor: 'pointer', '&:hover': { backgroundColor: '#f5f5f5' } }}
                        >
                            <Typography>{item}</Typography>
                        </ListItem>
                    ))}
                </List>
            </Grid2>
        </Box>
    );
}

export default ComponenteA