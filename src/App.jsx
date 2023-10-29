import { useState, useEffect, lazy, Suspense } from 'react';
import JsonData from './data/data.json';
import SmoothScroll from 'smooth-scroll';
import './App.css';

const Navigation = lazy(() => import('./components/Navigation'));
const Header = lazy(() => import('./components/Header'));
const Features = lazy(() => import('./components/Features'));
const About = lazy(() => import('./components/About'));
const Services = lazy(() => import('./components/Services'));
const Gallery = lazy(() => import('./components/Gallery'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const Team = lazy(() => import('./components/Team'));
const Contact = lazy(() => import('./components/Contact'));


export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}><Navigation /> </Suspense>
      <Suspense fallback={<div>Loading...</div>}><Header data={landingPageData.Header} /> </Suspense>
      <Suspense fallback={<div>Loading...</div>}><Features data={landingPageData.Features} /> </Suspense>
      <Suspense fallback={<div>Loading...</div>}><About data={landingPageData.About} /> </Suspense>
      <Suspense fallback={<div>Loading...</div>}><Services data={landingPageData.Services} /> </Suspense>
      <Suspense fallback={<div>Loading...</div>}><Gallery data={landingPageData.Gallery} /> </Suspense>
      <Suspense fallback={<div>Loading...</div>}><Testimonials data={landingPageData.Testimonials} /> </Suspense>
      <Suspense fallback={<div>Loading...</div>}><Team data={landingPageData.Team} /> </Suspense>
      <Suspense fallback={<div>Loading...</div>}><Contact data={landingPageData.Contact} /> </Suspense>
    </div>
  );
};

export default App;
