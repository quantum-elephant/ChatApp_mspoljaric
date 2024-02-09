export default function ViewChat({ chat }) {
  return (
    <>
      <ul className='chat-messages'>
        {chat.map((message) => (
          <li key={crypto.randomUUID()}>
            <div className='sender-data'>
              <div
                className='sender-color'
                style={{ backgroundColor: message.member.clientData.color }}
              ></div>
              <div className='sender-name'>
                {message.member.clientData.username}
              </div>
            </div>
            <div className='message-data'>{message.data}</div>
          </li>
        ))}
        {console.log(chat)}
      </ul>
    </>
  );
}

function Message({ member, data, id }, me) {}
