import React, { useState, useEffect } from 'react';
import 'tailwindcss/tailwind.css';

// 等後端資料
const mockContacts = [
  {
    id: 1,
    name: 'Company A',
    info: 'A leading company in the tech industry, known for innovation and quality.',
  },
  {
    id: 2,
    name: 'Company B',
    info: 'A well-established company with a strong presence in the market.',
  },
];

// 等後端資料
const mockCurrencyAnalysis = [
  'The currency trend is upward due to increased market demand.',
  'The currency is stable because of balanced trade relations.',
  'The currency trend is downward due to recent policy changes.',
];

const Text = () => {
  const [contacts, setContacts] = useState(mockContacts);
  const [selectedContact, setSelectedContact] = useState(null);
  const [response, setResponse] = useState(null);
  const [currencyAnalysis, setCurrencyAnalysis] = useState('');

  // figma: 通訊錄跳通知，AI助理問要不要向這個公司合作，而玩家可以點選回復(好或不好選項)不選默認為不好
  useEffect(() => {
    if (selectedContact && response === null) {
      const timer = setTimeout(() => {
        setResponse('No'); // Default response if none selected within 5 sec
      }, 5000); 

      return () => clearTimeout(timer);
    }
  }, [selectedContact, response]);

  const handleContactClick = (contact) => {
    setSelectedContact(contact);
    setResponse(null); // Reset response when a new contact is selected
  };

  const handleResponse = (reply) => {
    setResponse(reply);
  };

  const generateCurrencyAnalysis = () => {
    // 先設定成「隨機」給予漲或跌
    const randomAnalysis = mockCurrencyAnalysis[
      Math.floor(Math.random() * mockCurrencyAnalysis.length)
    ];
    setCurrencyAnalysis(randomAnalysis);
  };

  // Simulate a new turn
  // 每回合通訊錄內，AI助理都會分析為啥玩家的貨幣會是現在的走向(我們可以直接問中立AI為何回合間會做出這樣的預測就好)  
  useEffect(() => {
    const turnInterval = setInterval(() => {
      generateCurrencyAnalysis();
    }, 10000);

    return () => clearInterval(turnInterval);
  }, []);

  return (
    <div className="flex p-4">
      <div className="w-1/3 border-r border-gray-300 pr-4">
        <h2 className="text-xl font-bold mb-4">Contacts</h2>
        <ul>
          {contacts.map((contact) => (
            <li
              key={contact.id}
              className="p-2 cursor-pointer font-bold text-black hover:bg-gray-200"
              onClick={() => handleContactClick(contact)}
            >
              <div>{contact.name}</div>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-2/3 pl-4">
        {selectedContact ? (
          <>
            <h3 className="text-2xl font-semibold mb-2">{selectedContact.name}</h3>
            <p className="text-gray-800 mb-4">{selectedContact.info}</p>
            <div className="mb-4">
              <p className="text-xl">AI Assistant: Do you want to cooperate with this company?</p>
              <button
                className="bg-green-500 text-white p-2 m-2 rounded"
                onClick={() => handleResponse('Yes')}
              >
                Yes
              </button>
              <button
                className="bg-red-500 text-white p-2 m-2 rounded"
                onClick={() => handleResponse('No')}
              >
                No
              </button>
            </div>
            {response && (
              <p className={`text-xl ${response === 'Yes' ? 'text-green-500' : 'text-red-500'}`}>
                Player's response: {response}
              </p>
            )}
          </>
        ) : (
          <p className="text-gray-500">Select a contact to view details</p>
        )}
        <div className="mt-4">
          <h3 className="text-xl font-bold">Currency Trend Analysis</h3>
          <p className="text-gray-800">{currencyAnalysis}</p>
        </div>
      </div>
    </div>
  );
};

export default Text;
