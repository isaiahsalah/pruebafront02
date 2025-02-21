import themePage1 from '@/styles/theme';
import { Container, CssBaseline, List, ListItem, ListItemText, Paper, ThemeProvider, Typography } from '@mui/material';
import { GetServerSideProps } from 'next';
import React from 'react'
// Definir el tipo para los datos que vamos a recibir
interface Post {
    id: number;
    title: string;
    body: string;
}

// Definir el tipo de props para nuestro componente
interface page1Props {
    posts: Post[];
}

// getServerSideProps para obtener los datos de la API
export const getServerSideProps: GetServerSideProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts: Post[] = await res.json();

    return { props: { posts } };
};
const Page1: React.FC<page1Props> = ({ posts }) => {
    return (
        <ThemeProvider theme={themePage1}>

            <CssBaseline />
            <Container sx={{ padding: 4 }}>
                <Typography variant="h4" gutterBottom>
                    Fundamentos de Next.js + React + MUI (TypeScript)
                </Typography>
                <Paper sx={{ padding: 2 }}>
                    <Typography variant="h5" gutterBottom>
                        * Lista de Posts
                    </Typography>

                    <List>
                        {posts.map((post) => (
                            <ListItem key={post.id} sx={{ marginBottom: 2 }}>
                                <ListItemText
                                    primary={post.title}

                                    secondary={post.body}
                                />
                            </ListItem>
                        ))}
                    </List>
                </Paper>
            </Container>
        </ThemeProvider>
    )
}

export default Page1