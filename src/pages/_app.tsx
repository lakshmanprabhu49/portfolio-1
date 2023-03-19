import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import ReactDOM from "react-dom/client";
import React from 'react';
import Link from 'next/link';
import Home from '.';
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps}/>;
}

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);
