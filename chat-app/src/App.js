import { useState } from 'react';
import './Styles/App.scss';

export default function App() {
  const messageArr = [
    'Hello',
    'Goodbye',
    'I am a friend',
    'I love potato',
    'I am learning WebDev',
  ];
  const [messages, setMessages] = useState(messageArr);

  return (
    <>
      {messages.map((message) => (
        <li key={crypto.randomUUID}>{message}</li>
      ))}
    </>
  );
}
