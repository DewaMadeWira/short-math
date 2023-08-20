import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { Toaster } from '@/components/ui/toaster';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { Route } from 'wouter';
import RedirectPage from './redirect.tsx';
import Home from './Home.tsx';

const queryClient = new QueryClient();

const Router = () => (
    <div>
        {/* <Link href='/users/1'>
            <a className='link'>Profile</a>
        </Link> */}
        <Route path='/:link'>
            {(params) => <App params={params.link}></App>}
        </Route>
        {/* <Route path='redirect/:link'>
            {(params) => <RedirectPage params={params.link}></RedirectPage>}
        </Route> */}
        <Route path='/' component={Home}></Route>
    </div>
);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <Router></Router>
            <Toaster />
        </QueryClientProvider>
    </React.StrictMode>
);
