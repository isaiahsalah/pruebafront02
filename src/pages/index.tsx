import { Typography } from '@mui/material';
import Link from 'next/link';  // Importa Link de Next.js para hacer navegación

const HomePage = () => {
  return (

    <div>
      <Typography variant='h2'>Prueba Técnica</Typography>
      <ul>
        <li>
          <Link href="/page1">Ir a la Página 1</Link>
        </li>
        <li>
          <Link href="/page2">Ir a la Página 2</Link>
        </li>
        <li>
          <Link href="/page3">Ir a la Página 3</Link>
        </li>
      </ul>
    </div>
  );
};

export default HomePage;