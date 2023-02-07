import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './pages/App';
import NotFound from './pages/NotFound';
import { Route, Switch } from 'wouter';
import Layout from "./components/Layout";
import { ChakraProvider } from '@chakra-ui/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <Layout>
        <Switch>
          <Route exact path="/"><App /></Route>
          <Route><NotFound /></Route>
        </Switch>
      </Layout>
    </ChakraProvider>
  </React.StrictMode>
);
