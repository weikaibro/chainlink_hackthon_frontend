import React, { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { darkModeState } from '../../state/recoil';
import BottomNav from './components/BottomNav';

function Layout({ children }) {
  const darkMode = useRecoilValue(darkModeState);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkMode ? 'black' : 'wireframe');
  }, [darkMode]);

  return (
    <div className="main antialiased font-display flex justify-center items-center h-screen">
      <div className="mockup-phone">
        <div className="camera" />
        <div className="display overflow-hidden">
          <div className="artboard p-9 relative top-0 overflow-hidden phone-3">
            {children}
            <BottomNav />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
