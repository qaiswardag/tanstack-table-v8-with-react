import { useState } from 'react';
import FilterTable from './components/FilterTable';
import './App.css';

function App() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <h1 className="text-2xl pt-8 text-center font-bold">
          TanStack React Table
        </h1>
        <FilterTable></FilterTable>
      </div>
    </>
  );
}

export default App;
