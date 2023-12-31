import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { Layout, MainPage, SinglePostPage, SingleUserPage,  NotFoundPage } from './pages';
import { POSTS, USERS } from './utils/routes';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<MainPage />} />
      <Route path={`${POSTS}/:id`} element={<SinglePostPage />} />
      <Route path={`${USERS}/:id`} element={<SingleUserPage />} />
      <Route path='*' element={<NotFoundPage />} />
    </Route>
  )
);

export default router;
