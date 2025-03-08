import { nanostore } from 'nanostore';

interface Template {
  name: string;
  font: string;
  fontSize: number;
  spacing: number;
  position: number;
  active: boolean;
}

const templateStore = nanostore<Template[]>([
  {
    name: 'Celebración',
    font: 'Playfair Display',
    fontSize: 24,
    spacing: 4,
    position: 50,
    active: false
  },
  {
    name: 'Corporativo',
    font: 'Montserrat',
    fontSize: 20,
    spacing: 2,
    position: 40,
    active: false
  },
  {
    name: 'Regalo',
    font: 'Playfair Display',
    fontSize: 28,
    spacing: 6,
    position: 60,
    active: false
  }
]);

export default templateStore;
