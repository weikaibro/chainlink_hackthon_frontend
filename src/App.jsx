// import logo from './logo.svg';
import './App.css';

import { useRoutes } from 'react-router-dom';
// import { AuthContextProvider } from './config/Auth/context';
import Layout from './config/Layout/Layout';
import routesConfig from './config/routes';
// import { UserDataProvider } from './config/UserData/storage';
import { RecoilRoot } from 'recoil';

function App() {
  const routes = useRoutes(routesConfig);
  return (
    <>
      <RecoilRoot>
        <Layout>
            {routes}
        </Layout>
      </RecoilRoot>
    </>
  );
}

export default App;
