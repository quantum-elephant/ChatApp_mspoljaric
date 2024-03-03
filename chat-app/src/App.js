import { useEffect, useRef, useState } from 'react';
import './Styles/App.scss';
import Messages from './Components/Messages';
import {
  generateRandomColor,
  generateRandomName,
  generateUniqueId,
} from './Helpers/Utils';
import Input from './Components/Input';

export default function App() {
  // Scaledrone
  <script
    type='text/javascript'
    src='https://cdn.scaledrone.com/scaledrone.min.js'
  />;

  let drone = null;

  // useEffect for loading Scaledrone
  useEffect(() => {
    if (drone === null) {
      connectToScaledrone();
    }
  }, []);

  console.log(drone);
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

  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const [currentUser, setCurrentUser] = useState({
    clientId: generateUniqueId(),
    clientData: {
      color: generateRandomColor(),
      username: generateRandomName(),
    },
  });

  //Enabling Scaledrone access to current state
  //radimo to pomocu useRef hooka kojim omogucujemo pristup nekoj referenci (u ovom slucaju nasim state parametrima) kako bi se updejtali tijekom svakog rendera
  const messagesRef = useRef(messages);
  // messagesRef.current = messages; mozemo inicijalnu vrijednost messagesRef zapisati ovako ili dodati u zagradu useRef(initialValue) hooka umjesto initialValue - kada napravimo console.log dobivamo istu vrijednost
  // console.log(messagesRef.current);
  const currentUserRef = useRef(currentUser);

  // Create new instance of Scaledrone
  function connectToScaledrone() {
    drone = new window.Scaledrone('XRYpwOO0JVDNfZUW', {
      data: currentUserRef,
    });
    drone.on('open', (error) => {
      if (error) {
        return console.error(error);
      }
      currentUserRef.id = drone.clientId;
      setCurrentUser(currentUserRef);
    });
  }

  const room = drone.subscribe('observable-room');

  room.on('message', (message) => {
    const { data, member } = message;
    setMessages([...messagesRef, message]);
  });

  // TODO: connect to a room

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
          <Input
            messages={messages}
            user={currentUser}
            setMessages={setMessages}
            generateUniqueId={generateUniqueId}
          />

          {/* <div className='chat-input'>
            <form className='form' method='post' onSubmit={handleSubmit}>
              <input name='my_input' placeholder='Message'></input>
              <button type='submit'>Send</button>
            </form>
          </div> */}
        </div>
      )}
    </>
  );
}
