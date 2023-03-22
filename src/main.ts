import './style.css';
import { handleSubmit } from './handleSubmit';

const form = document.getElementById('submit-form') as HTMLFormElement;
form.addEventListener('submit', handleSubmit);
