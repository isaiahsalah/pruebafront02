import { useAnalytics } from '@/providers/AnalyticsContext';
import { Button, Grid2, Typography } from '@mui/material';
import React from 'react'

const ComponenteB = () => {
    const { dispatch } = useAnalytics();

    return (
        <Grid2 display={'grid'} p={1}>
            <Typography>Botón clickeable</Typography>
            <Button
                variant="contained"
                color="primary"
                onClick={() => dispatch({ type: 'LOG_CLICK' })}
            >
                Haz clic aquí
            </Button>
        </Grid2>

    );
}

export default ComponenteB