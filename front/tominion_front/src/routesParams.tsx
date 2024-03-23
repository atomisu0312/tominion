import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import RouteApp from './component/common/RouteApp'
import TopPage from './component/top/TopPage'
import CardPage from './component/card/CardPage'
import DeckPage from './component/deck/DeckPage'
import SimulatorPage from './component/simulator/SimulatorPage';
import AccountPage from './component/account/AccountPage';
import TeamPage from './component/team/TeamPage';
import HistoryPage from './component/history/HistoryPage';


const routesParams = createBrowserRouter(
  createRoutesFromElements(
    <Route path = "/" element={<RouteApp />}>
      <Route index element={<TopPage/>}/>
      <Route path="card" element={<CardPage/>}/>
      <Route path="deck" element={<DeckPage/>}/>
      <Route path="simulator" element={<SimulatorPage/>}/>
      <Route path="account" element={<AccountPage/>}/>
      <Route path="team" element={<TeamPage/>}/>
      <Route path="history" element={<HistoryPage/>}/>
    </Route>
  )
);

export default routesParams;