import React from 'react';
import { useRecoilState } from 'recoil';
import { coinsState } from '../../../state/recoil';
import image1 from '../../../assets/token1.png';
import image2 from '../../../assets/token2.png';
import image3 from '../../../assets/token3.png';
import image4 from '../../../assets/token_stable.png';

function Exchange() {
  // 使用 Recoil State
  const [newState, setNewState] = useRecoilState(coinsState);

  // 新的幣種數據
  const coins = [
    { uuid: '1', name: 'Token1', symbol: 'TK1', change: 5.00, price: 100, iconUrl: image1 },
    { uuid: '2', name: 'Token2', symbol: 'TK2', change: -3.00, price: 100, iconUrl: image2 },
    { uuid: '3', name: 'Token3', symbol: 'TK3', change: 1.50, price: 100, iconUrl: image3 },
    { uuid: '4', name: 'StableCoin', symbol: 'SC', change: 0.00, price: 1, iconUrl: image4 },
  ];

  const coins_new = [
    { uuid: '1', name: 'Token1', symbol: 'TK1', change: 7.00, price: 105, iconUrl: image1 },
    { uuid: '2', name: 'Token2', symbol: 'TK2', change: -2.00, price: 102, iconUrl: image2 },
    { uuid: '3', name: 'Token3', symbol: 'TK3', change: 2.00, price: 102, iconUrl: image3 },
    { uuid: '4', name: 'StableCoin', symbol: 'SC', change: 0.00, price: 1, iconUrl: image4 },
  ];

  const displayCoins = newState ? coins_new : coins;

  return (
    <div className="exchange-container p-4 flex items-center justify-center h-screen">
      <div className="coins-list">
        {displayCoins.map((coin, index) => (
          <div key={coin.uuid} className={`coin-card ${index >= 2 ? 'lower' : ''}`}>
            <img src={coin.iconUrl} alt={`${coin.name} icon`} className="w-16 h-16 mb-4" />
            <h2 className="text-xl font-semibold text-white">{coin.name} ({coin.symbol})</h2>
            <p className={`text-lg ${coin.change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
              {coin.change >= 0 ? '+' : ''}{coin.change}%
            </p>
            <p className="text-lg text-white">${coin.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Exchange;
