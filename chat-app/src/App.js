import { useState } from 'react';
import './Styles/App.scss';
import Messages from './Components/Messages';

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
  /*
  const [me, setMe] = useState({
    username: generateRandomName(),
    color: generateRandomColor(),
  });
*/
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  // Functions
  const generateUniqueId = () => Math.random().toString(36).slice(2);
  const handleSubmit = (e) => {
    e.preventDefault();
    const newInput = e.target.my_input.value;
    if (newInput !== null && newInput !== '') {
      const newMessageId = generateUniqueId();
      const newMemberUsername = generateRandomName();
      const newMemberColor = generateRandomColor();
      const newMemberId = generateUniqueId().slice(4);
      const newMessage = {
        data: newInput,
        id: newMessageId,
        member: {
          clientId: newMemberId,
          clientData: {
            color: newMemberColor,
            username: newMemberUsername,
          },
        },
      };
      // setMessages([...messages, newMessage]);
      console.log(newMessage);
    } else {
    }
    e.target.reset();
  };

  const generateRandomName = () => {
    const adjectives = [
      'cerebral',
      'indelible',
      'euphonious',
      'austere',
      'sanguine',
      'jubilant',
      'imperturbable',
      'convivial',
      'erudite',
      'stoic',
      'pensive',
      'astounding',
      'incandescent',
      'exquisite',
      'somber',
      'voracious',
      'resilient',
      'unfathomable',
      'ephemeral',
      'melancholic',
      'serendipitous',
      'melodic',
      'kaleidoscopic',
      'tempestuous',
      'idyllic',
      'inscrutable',
      'confounding',
      'poignant',
      'luminous',
      'languid',
      'mellifluous',
      'verdant',
      'wistful',
      'ethereal',
      'scintillating',
      'precocious',
      'gregarious',
      'diaphanous',
      'serene',
      'majestic',
      'captivating',
      'impeccable',
      'exuberant',
      'effervescent',
      'labyrinthine',
      'enthralling',
      'enigmatic',
      'audacious',
    ];

    const nouns = [
      'cathedral',
      'comet',
      'compass',
      'constellation',
      'dandelion',
      'eclipse',
      'elegy',
      'firefly',
      'fractal',
      'galaxy',
      'gargoyle',
      'geyser',
      'hieroglyph',
      'hurricane',
      'kaleidoscope',
      'magician',
      'meteorite',
      'monastery',
      'mural',
      'nocturne',
      'nomad',
      'oasis',
      'paradox',
      'pebble',
      'phoenix',
      'pilgrim',
      'prism',
      'quicksand',
      'rainstorm',
      'reflection',
      'relic',
      'rhapsody',
      'sandstone',
      'savannah',
      'skyscraper',
      'sonnet',
      'spectacle',
      'sphinx',
      'staircase',
      'symphony',
      'tapestry',
      'tornado',
      'trailblazer',
      'tremor',
      'twilight',
      'whimsy',
      'willow',
      'windmill',
      'wolf',
      'zenith',
    ];

    const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const noun = nouns[Math.floor(Math.random() * nouns.length)];

    return adjective + noun;
  };

  const generateRandomColor = () => {
    return '#' + Math.floor(Math.random() * 0xffffff).toString(16);
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
          <Messages messages={messages} />

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
