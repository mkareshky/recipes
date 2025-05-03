import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import RecipesProvide from './contexts/RecipesContext.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <StrictMode>
      <RecipesProvide>
        <App />
      </RecipesProvide>
    </StrictMode>
  </BrowserRouter>
)
