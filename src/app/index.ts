import './styles/main.scss';
import './animations';
import './fetch_api';
import './draw_chart';
import { DeveloperFactory } from './factory';

const Company = new DeveloperFactory();
const junDev = Company.create({ qualification: 'junior', name: 'Jack' });
const midDev = Company.create({ qualification: 'middle', name: 'John' });
const senDev = Company.create({ qualification: 'senior', name: 'Jill' });
console.log(junDev);
console.log(midDev);
console.log(senDev);
