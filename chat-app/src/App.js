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
  const [chat, setChat] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  // Functions
  const handleSubmit = (e) => {
    e.preventDefault();
    const newMessage = e.target.my_input.value;
    if (newMessage !== null && newMessage !== '') {
      setChat([...chat, newMessage]);
    } else {
    }
    console.log(chat);
    e.target.reset();
  };

  const handleKeyDown = (e) => {
    console.log('key has been pressed', e.key);
    console.log(chat, e.target.value);
    e.preventDefault();
    const newMessage = e.target.value;
    if (newMessage !== null && newMessage !== '') {
      setChat([...chat, newMessage]);
    } else {
    }
    e.target.reset();
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
              <input
                name='my_input'
                placeholder='Message'
                onKeyDown={handleKeyDown}
              ></input>
              <button type='submit'>Send</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
