import { Suspense } from 'react';
import './App.css';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import type { ITechnology } from './type/technology';
import Technologies from './components/TechnologyList/Technologies';

const technologyFetch = async (): Promise<ITechnology[]> => {
  const response = await fetch('../public/data/technologies.json');
  const data = await response.json();
  return data;
};

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Suspense fallback={<div>Loading...</div>}>
        <Technologies technologyPromise={technologyFetch()} />
      </Suspense>
    </>
  );
}

export default App;
