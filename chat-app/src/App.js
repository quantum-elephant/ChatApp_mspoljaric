import { useState } from 'react';
import './App.css';
import ShowMessages from './Components/ShowMessages';

export default function App() {
  const [messages, setMessages] = useState([
    {
      id: '1',
      data: 'This is a test message!',
      member: {
        id: '1',
        clientData: {
          color: 'blue',
          username: 'bluemoon',
        },
      },
    },
  ]);

  return (
    <div className='App'>
      <ShowMessages messages={messages} />
    </div>
  );
}
