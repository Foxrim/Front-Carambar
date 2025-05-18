import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom';
import './styles/index.css'
import App from './App.tsx'

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <HashRouter>
      <App />
    </HashRouter>,
  );
} else {
  throw new Error("Root element with id 'root' not found");
}
