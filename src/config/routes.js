import Apps from '../screens/Apps/Apps';
import Home from '../screens/Home/Home';
import Exchange from '../screens/Pages/Exchange/exchange';
import Mail from '../screens/Pages/Mail/mail';
import News from '../screens/Pages/News/news';
import Text from '../screens/Pages/Text/text';
import Settings from '../screens/Settings/Settings';

const routesConfig = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/apps',
    element: <Apps />,
  },
  {
    path: '/apps/exchange',
    element: <Exchange />,
  },
  {
    path: '/apps/mail',
    element: <Mail />,
  },
  {
    path: '/apps/news',
    element: <News />,
  },
  {
    path: '/apps/text',
    element: <Text />,
  },
  {
    path: '/settings',
    element: <Settings />,
  },
  {
    path: '*',
    element: <Home />,
  },
];

export default routesConfig;
