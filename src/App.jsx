import { useState, useEffect, lazy, Suspense } from 'react';
import JsonData from './data/data.json';
import SmoothScroll from 'smooth-scroll';
import './App.css';
import Fallback from './Fallback'

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
      <Suspense fallback={<Fallback/>}><Navigation /> </Suspense>
      <Suspense fallback={<Fallback/>}><Header data={landingPageData.Header} /> </Suspense>
      <Suspense fallback={<Fallback/>}><Features data={landingPageData.Features} /> </Suspense>
      <Suspense fallback={<Fallback/>}><About data={landingPageData.About} /> </Suspense>
      <Suspense fallback={<Fallback/>}><Services data={landingPageData.Services} /> </Suspense>
      <Suspense fallback={<Fallback/>}><Gallery data={landingPageData.Gallery} /> </Suspense>
      <Suspense fallback={<Fallback/>}><Testimonials data={landingPageData.Testimonials} /> </Suspense>
      <Suspense fallback={<Fallback/>}><Team data={landingPageData.Team} /> </Suspense>
      <Suspense fallback={<Fallback/>}><Contact data={landingPageData.Contact} /> </Suspense>
    </div>
  );
};

export default App;
