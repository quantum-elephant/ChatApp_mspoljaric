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
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && (
        <div>
          <h2>Loading, please wait...</h2>
        </div>
      )}

      {error && (
        
      )}
      {messages.map((message) => (
        <li key={crypto.randomUUID()}>{message}</li>
      ))}
    </>
  );
}
