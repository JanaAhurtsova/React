import { createBrowserRouter, createRoutesFromElements, Navigate, Route } from 'react-router-dom';
import { Layout } from '../components/layout';
import { HomePage } from '../pages/homePage';
import { AboutPage } from '../pages/about';
import { NotFoundPage } from '../pages/404';
import { FormPage } from '../pages/form';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="form" element={<FormPage />} />
      <Route path="404" element={<NotFoundPage />} />
      <Route path="*" element={<Navigate to="404" replace />} />
    </Route>
  )
);

export default router;
