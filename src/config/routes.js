import Apps from '../screens/Apps/Apps';
import Home from '../screens/Home/Home';
// import Login from '../screens/Login/Login';
// import Calculator from '../screens/Pages/Calculator/Calculator';
// import TestCom from '../screens/Pages/CryptoApp/Components/AllCryptos';
// import CryptoApp from '../screens/Pages/CryptoApp/CryptoApp';
// import CryptoDetails from '../screens/Pages/CryptoApp/Components/CryptoDetails';
// import JokesApp from '../screens/Pages/JokesApp/JokesApp';
// import Note from '../screens/Pages/Notes/components/Note';
// import Notes from '../screens/Pages/Notes/Notes';
// import Weather from '../screens/Pages/Weather/Weather';
import Exchange from '../screens/Pages/Exchange/exchange';
import Mail from '../screens/Pages/Mail/mail';
import News from '../screens/Pages/News/news';
import Text from '../screens/Pages/Text/text';
import Settings from '../screens/Settings/Settings';
// import Protected from './Auth/Protected';
// import Wallpaper from '../screens/Settings/Wallpaper/Wallpaper';

const routesConfig = [
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/apps',
      element: <Apps />,
      children: [
        {
          path: '/apps/exchange',
          element: <Exchange />,
        },
        {
          path: 'mail',
          element: <Mail />,
        },
        {
          path: 'news',
          element: <News />,
        },
        {
          path: 'text',
          element: <Text />,
        },
      ]
    },
    {
      path: '/settings',
      children: [
        {
          path: '/settings',
          element: <Settings />,
        },
      ],
    },
    // {
    //   path: '/weather',
    //   element: <Weather />,
    // },
    // {
    //   path: '/calculator',
    //   element: <Calculator />,
    // },
    // {
    //   path: '/notes',
    //   element: <Notes />,
    // },
    // {
    //   path: '/notes/:id',
    //   element: <Note />,
    // },
    // {
    //   path: '/jokes',
    //   element: <JokesApp />,
    // },
    // {
    //   path: '/cryptoapp',
    //   element: <CryptoApp />,
    //   children: [
    //     {
    //       path: 'all',
    //       element: <TestCom />,
    //     },
    //     {
    //       path: 'coin/:CoinId',
    //       element: <CryptoDetails />,
    //     },
    //   ],
    // },
    {
      path: '*',
      element: <Home />,
    },
];


// const routesConfig = [
  //   {
//     element: <Protected />,
//     children: [
//       {
//         path: '/',
//         element: <Home />,
//       },
//       {
//         path: '/settings',
//         children: [
//           {
//             path: '/settings',
//             element: <Settings />,
//           },
//           {
//             path: 'wallpaper',
//             element: <Wallpaper />,
//           },
//         ],
//       },
//       {
//         path: '/apps',
//         element: <Apps />,
//       },
//       {
//         path: '/weather',
//         element: <Weather />,
//       },
//       {
//         path: '/calculator',
//         element: <Calculator />,
//       },
//       {
//         path: '/notes',
//         element: <Notes />,
//       },
//       {
//         path: '/notes/:id',
//         element: <Note />,
//       },
//       {
//         path: '/jokes',
//         element: <JokesApp />,
//       },
//       {
//         path: '/cryptoapp',
//         element: <CryptoApp />,
//         children: [
//           {
//             path: 'all',
//             element: <TestCom />,
//           },
//           {
//             path: 'coin/:CoinId',
//             element: <CryptoDetails />,
//           },
//         ],
//       },
//       {
//         path: '*',
//         element: <Home />,
//       },
//     ],
//   },
//   {
//     path: '/login',
//     element: <Login />,
//   },

// ];


  
export default routesConfig;
