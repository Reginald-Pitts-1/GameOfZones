// This links the entire app to the root <div> inside public.index.html
import ReactDOM from 'react-dom/client'
import App from './App';
import './index.css'

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(<App/>)