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

  // States
  const [chat, setChat] = useState(messageArr);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  // Functions
  const handleSubmit = (e) => {
    e.preventDefault();
    setChat(chat.push(e.target.value));
  };

  return (
    <>
      {loading && (
        <div>
          <h2>Loading, please wait...</h2>
        </div>
      )}

      {error && (
        <div>
          <h2>There was an error {error.message}</h2>
        </div>
      )}

      {!error && !loading && (
        <div className='chat'>
          <div className='chat-messages'>
            {chat.map((message) => (
              <li key={crypto.randomUUID()}>{message}</li>
            ))}
          </div>

          <div className='chat-input'>
            <form className='form' method='post' onSubmit={handleSubmit}>
              <input name='myInput' placeholder='Message'></input>
              <button type='submit'>Send</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
