import { useState } from 'react';
import './Styles/App.scss';
import Messages from './Components/Messages';
import {
  generateRandomColor,
  generateRandomName,
  generateUniqueId,
} from './Helpers/Utils';

export default function App() {
  // States
  const [messages, setMessages] = useState([
    {
      data: 'This is a test message!',
      id: '1',
      member: {
        clientId: '1',
        clientData: {
          color: 'blue',
          username: 'bluemoon',
        },
      },
    },
  ]);

  const [currentUser, setCurrentUser] = useState({
    clientId: generateUniqueId(),
    clientData: {
      color: generateRandomColor(),
      username: generateRandomName(),
    },
  });

  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  // Functions
  const handleSubmit = (e) => {
    e.preventDefault();
    const newInput = e.target.my_input.value;
    if (newInput !== null && newInput !== '') {
      const newMessageId = generateUniqueId();
      // const newMemberUsername = generateRandomName();
      // const newMemberColor = generateRandomColor();
      // const newMemberId = generateUniqueId().slice(4);
      const newMessage = {
        data: newInput,
        id: newMessageId,
        member: {
          clientId: currentUser.clientId,
          clientData: {
            color: currentUser.clientData.color,
            username: currentUser.clientData.username,
          },
        },
      };
      setMessages([...messages, newMessage]);
      console.log(newMessage);
    } else {
    }
    e.target.reset();
  };

  /**TODO: Implement Enter for sending */

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
          <Messages messages={messages} user={currentUser} />

          <div className='chat-input'>
            <form className='form' method='post' onSubmit={handleSubmit}>
              <input name='my_input' placeholder='Message'></input>
              <button type='submit'>Send</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
