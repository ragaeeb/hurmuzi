import '@fontsource-variable/geist';
import '@fontsource-variable/geist-mono';
import './index.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';
import { Footer } from '@/components/footer';
import HomePage from '@/pages/HomePage';
import ListPage from '@/pages/ListPage';
import PlayPage from '@/pages/PlayPage';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/list" element={<ListPage />} />
                <Route path="/play" element={<PlayPage />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    </StrictMode>,
);
