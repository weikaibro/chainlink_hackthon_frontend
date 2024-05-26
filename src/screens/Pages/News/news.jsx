import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';

// 等後端資料
const mockNews = [
  {
    id: 1,
    title: 'Adventure Begins!',
    content: 'The journey starts in a small village. Players are expected to explore and find hidden clues.',
  },
  {
    id: 2,
    title: 'Mystery in the Forest',
    content: 'A mysterious event has been reported in the forest. It is said to be related to the ancient ruins.',
  },
];

const News = () => {
  const [selectedNews, setSelectedNews] = useState(null);

  const handleNewsClick = (news) => {
    setSelectedNews(news);
  };

  // figma: 上面有動態島持續宣布新聞(界面較像是電腦開多工)
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
    </div>
  );
};

export default News;
