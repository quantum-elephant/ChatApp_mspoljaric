import { useState } from 'react';
import './Styles/App.scss';
import ViewChat from './Components/ViewChat';

export default function App() {
  // States
  const [chat, setChat] = useState([
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

  /*
  Each message should be an object consisting of following information:
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
    
    */

  /*
  const [me, setMe] = useState({
    username: randomName(),
    color: randomColor(),
  });
  */

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

  const randomName = () => {
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

  const randomColor = () => {
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
          <ViewChat chat={chat} />

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
