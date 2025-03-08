import { nanostore } from 'nanostore';

interface Font {
  family: string;
  name: string;
  url?: string;
}

const fontStore = nanostore<Font[]>([
  { family: 'Playfair Display', name: 'Clásica', url: 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap' },
  { family: 'Montserrat', name: 'Moderna', url: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;600&display=swap' },
  // Agrega más fuentes según sea necesario
]);

export default fontStore;
