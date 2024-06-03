import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import 'tailwindcss/tailwind.css';
import { coinsState } from '../../../state/recoil';

// 等後端資料
const mockNews = [
  {
    id: 1,
    title: 'New Product Announced by Chainlink!',
    content: 'Chainlink has again reshaped the landscape of blockchain with their new product integrating with IoT.',
  },
];

const News = () => {
  const [selectedNews, setSelectedNews] = useState(null);
  const [_, setCoinsState] = useRecoilState(coinsState);
  const [chosenAction, setChosenAction] = useState(null);

  const handleNewsClick = (news) => {
    setSelectedNews(news);
  };

  const handleBuyOrSellClick = (action) => {
    setCoinsState(true);
    setChosenAction(action);
  };

  return (
    <div className="flex p-4">
      <div className="w-1/3 border-r border-gray-300 pr-4">
        <h2 className="text-xl font-bold mb-4">News</h2>
        <ul>
          {mockNews.map((news) => (
            <li
              key={news.id}
              className="p-2 cursor-pointer font-bold text-black hover:bg-gray-200"
              onClick={() => handleNewsClick(news)}
            >
              <div>{news.title}</div>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-2/3 pl-4">
        {selectedNews ? (
          <>
            <h3 className="text-2xl font-semibold mb-2">{selectedNews.title}</h3>
            <p className="text-gray-800">{selectedNews.content}</p>
          </>
        ) : (
          <p className="text-gray-500">Select a news article to read</p>
        )}
      </div>
      <div className="absolute bottom-40 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-2">
        {chosenAction ? (
          <p className="text-lg font-bold text-black">You chose to {chosenAction}.</p>
        ) : (
          <>
            <p className="text-lg font-bold text-black">Buy or Sell Token 1?</p>
            <div className="flex space-x-4">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => handleBuyOrSellClick('sell')}
              >
                Sell
              </button>
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => handleBuyOrSellClick('buy')}
              >
                Buy
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default News;
