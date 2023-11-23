import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { Layout, MainPage, SinglePostPage, NotFoundPage } from './pages';
import { POSTS } from './utils/routes';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<MainPage />} />
      <Route path={`${POSTS}/:id`} element={<SinglePostPage />} />
      <Route path='*' element={<NotFoundPage />} />
    </Route>
  )
);

export default router;
