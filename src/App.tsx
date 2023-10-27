import { Box } from '@mui/material';
import { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'reactflow/dist/style.css';
import './App.css';
import Toolbar from './components/Toolbar';
import routes from './routes';
export default function App() {
  return <>
    <BrowserRouter>
      <Toolbar />
      <Box style={{ flex: '1 1 auto'}} display="flex" alignSelf={'stretch'} >
        <Routes>
          {routes.map(route => <Route key={route.path} {...{ ...route, element: <Suspense fallback={<></>}>{route.component}</Suspense> }} />)}
          <Route {...{ path: '*', element: <div>404</div> }} />
        </Routes>
      </Box>
    </BrowserRouter>
  </>
}
