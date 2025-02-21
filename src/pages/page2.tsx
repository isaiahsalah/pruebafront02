"use client"
import { Camera, CameraResultType } from '@capacitor/camera';
import { Button, Card, CardActions, CardContent, Container, Typography } from '@mui/material';
import Image from 'next/image';
import { useState } from 'react';


const Page2 = () => {
    const [photo, setPhoto] = useState<string | null>(null);
    const [errorPho, setErrorPho] = useState<string | null>(null);


    const [location, setLocation] = useState<{ latitude: number; longitude: number } | null>(null);
    const [errorLoc, setErrorLoc] = useState<string | null>(null);

    const handleGetLocation = async () => {
        try {
            const { Geolocation } = await import('@capacitor/geolocation');

            // Verificar permisos de ubicación
            const permissionStatus = await Geolocation.checkPermissions();
            if (permissionStatus.location !== 'granted') {
                // Solicitar permisos de ubicación
                const requestStatus = await Geolocation.requestPermissions();
                if (requestStatus.location !== 'granted') {
                    throw new Error('Permisos de ubicación no concedidos.');
                }
            }


            // Obtener la ubicación actual
            const position = await Geolocation.getCurrentPosition();

            // Guardar la ubicación en el estado
            setLocation({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
            });
            setErrorLoc(null);
        } catch (err) {
            // Manejar errores
            console.error(err);
            setErrorLoc('No se pudo obtener la ubicación. Asegúrate de que la geolocalización esté habilitada.');
            setLocation(null);
        }
    };




    const handleTakePhoto = async () => {
        try {
            const image = await Camera.getPhoto({
                quality: 90,
                allowEditing: true,
                resultType: CameraResultType.Uri,
            });

            setPhoto(image.webPath || null);
            setErrorPho(null);
        } catch (err) {
            console.error(err);

            setErrorPho('La cámara no es compatible en este entorno o hubo un error al acceder a la cámara.');
            setPhoto(null);
        }
    };
    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Uso de Plugins de Capacitor (TypeScript)
            </Typography>
            <Card>
                <CardContent>


                    {photo && (
                        <div style={{ marginTop: '20px' }}>
                            <Typography variant="h6">Vista Previa:</Typography>
                            <Image src={photo} alt="Captured" style={{ maxWidth: '100%', height: 'auto' }} />
                        </div>
                    )}
                    {errorPho && (
                        <Typography color="error" style={{ marginTop: '20px' }}>
                            {errorPho}
                        </Typography>
                    )}
                </CardContent>
                <CardActions>
                    <Button variant="contained" color="primary" onClick={handleTakePhoto}>
                        Tomar Foto
                    </Button>
                    <Button variant="contained" color="primary" onClick={handleTakePhoto}>
                        Obtener Ubicación
                    </Button>
                </CardActions>
            </Card>
            <Card>
                <CardContent>
                    <Typography variant="h5" gutterBottom>
                        Geolocation Example
                    </Typography>
                    <Button variant="contained" color="primary" onClick={handleGetLocation}>
                        Obtener Ubicación
                    </Button>
                    {location && (
                        <div style={{ marginTop: '20px' }}>
                            <Typography variant="h6">Coordenadas:</Typography>
                            <Typography>Latitud: {location.latitude}</Typography>
                            <Typography>Longitud: {location.longitude}</Typography>
                        </div>
                    )}
                    {errorLoc && (
                        <Typography color="error" style={{ marginTop: '20px' }}>
                            {errorLoc}
                        </Typography>
                    )}
                </CardContent>
            </Card>
        </Container>

    )
}

export default Page2