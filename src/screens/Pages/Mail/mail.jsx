import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';

// 等後端資料
const mockMails = [
  {
    id: 1,
    sender: 'Game Master',
    subject: 'Welcome to the Game!',
    body: 'Dear Player, welcome to the adventure! Your journey starts now. Follow the clues and enjoy the game.',
    read: false,
  },
  {
    id: 2,
    sender: 'Game Master',
    subject: 'First Mission',
    body: 'Your first mission is to find the hidden key in the forest. It will unlock the next part of your adventure. Good luck!',
    read: false,
  },
];

const Mail = () => {
  const [mails, setMails] = useState(mockMails);
  const [selectedMail, setSelectedMail] = useState(null);

  const handleMailClick = (mail) => {
    setSelectedMail(mail);
    
    // Mark mail as read
    setMails((prevMails) =>
      prevMails.map((m) =>
        m.id === mail.id ? { ...m, read: true } : m
      )
    );
  };

  return (
    <div className="flex p-4">
      <div className="w-1/3 border-r border-gray-300 pr-4">
        <h2 className="text-xl font-bold mb-4">Inbox</h2>
        <ul>
          {mails.map((mail) => (
            <li
              key={mail.id}
              className={`p-2 cursor-pointer ${mail.read ? 'text-gray-600' : 'font-bold text-black'}`}
              onClick={() => handleMailClick(mail)}
            >
              <div className="font-semibold">{mail.sender}</div>
              <div className="truncate">{mail.subject}</div>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-2/3 pl-4">
        {selectedMail ? (
          <>
            <h3 className="text-2xl font-semibold mb-2">{selectedMail.subject}</h3>
            <p className="text-gray-800">{selectedMail.body}</p>
          </>
        ) : (
          <p className="text-gray-500">Select a mail to read</p>
        )}
      </div>
    </div>
  );
};

export default Mail;
