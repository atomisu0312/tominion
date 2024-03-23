import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import RouteApp from './component/common/RouteApp'
import TopPage from './component/top/TopPage'
import CardPage from './component/card/CardPage'
import DeckPage from './component/deck/DeckPage'

const routesParams = createBrowserRouter(
  createRoutesFromElements(
    <Route path = "/" element={<RouteApp />}>
      <Route index element={<TopPage/>}/>
      <Route path="card" element={<CardPage/>}/>
      <Route path="deck" element={<DeckPage/>}/>
    </Route>
  )
);

export default routesParams;