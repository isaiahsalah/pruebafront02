import ComponenteA from '@/components/ComponenteA';
import ComponenteB from '@/components/ComponenteB';
import { AnalyticsProvider, useAnalytics } from '@/providers/AnalyticsContext';
import { Box, Card, CardContent, Container, Divider, Grid2, Typography } from '@mui/material'
import React, { useEffect } from 'react'

const Page3 = () => {
    const { state } = useAnalytics();

    return (

        <Container>
            <Box sx={{ p: 4 }}>
                <Typography variant="h4" gutterBottom>
                    React Hooks y Gestión de Estado (TypeScript)
                </Typography>
                <Divider />

                <Box sx={{ p: 2 }}>
                    <ComponenteA />
                </Box>
                <Divider />
                <Box sx={{ p: 2 }}>
                    <ComponenteB />
                </Box>
                <Divider />
                <Box sx={{ p: 2 }}>
                    <Grid2 display={'grid'} p={1}>
                        <Typography fontWeight={"bold"}>Análisis</Typography>
                        <Typography variant="body2">Hover Events: {state.hoverEvents}</Typography>
                        <Typography variant="body2">Clicks: {state.clicks}</Typography>
                    </Grid2>
                </Box>
            </Box>
        </Container>

    )
}

export default Page3