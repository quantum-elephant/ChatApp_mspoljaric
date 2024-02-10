export default function Messages({ messages }) {
  return (
    <>
      <ul className='chat-messages'>
        {messages.map((message) => (
          <li key={message.id}>
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
        {console.log(messages)}
      </ul>
    </>
  );
}

function Message({ member, data, id }, me) {}
