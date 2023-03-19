import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Layout from '../components/layout/layout';
import HomePage from '../pages/homePage/home';
import AboutPage from '../pages/about/about';
import NotFoundPage from '../pages/404/404';
import FormPage from '../pages/form/formPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="form" element={<FormPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);

export default router;
