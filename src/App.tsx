import { Suspense } from 'react';
import './App.css';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import type { ITechnology } from './type/technology';
import Technologies from './components/TechnologyList/Technologies';
import Footer from './components/Footer/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const technologyFetch = async (): Promise<ITechnology[]> => {
  const response = await fetch('/data/technologies.json');
  const data = await response.json();
  return data;
};

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Suspense
        fallback={
          <div className="container mx-auto flex h-[50vh] items-center justify-center">
            <span className="loading loading-spinner loading-xl"></span>
          </div>
        }
      >
        <Technologies technologyPromise={technologyFetch()} />
      </Suspense>
      <Footer></Footer>
      <ToastContainer />
    </>
  );
}

export default App;
