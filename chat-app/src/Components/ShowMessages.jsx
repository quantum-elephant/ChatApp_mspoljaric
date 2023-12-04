/*
Component function:
show messages from test "state"
each message must include id, message and senders data (name and color of avatar)
*/

export default function ShowMessages({ messages, me }) {
  return (
    <div>
      <ul>
        {messages.map((singleMessage) => Message(singleMessage, me))}
        <div className='bottomdiv'></div>
      </ul>
    </div>
  );
}

function Message({ member, data, id }, me) {
  const { username, color } = member.clientData;

  //provjera je li poruka - vlastita poruka
  const messageFromMe = member.id === me.id;
  const className = messageFromMe
    ? `${styles.messagesMessage} ${styles.currentMember}`
    : styles.messagesMessage;

  return (
    <li key={id} className={className}>
      <span></span>
      <div className='styles messageContent'>
        <div className='styles username'>{username}</div>
        <div className='styles messageText'>{data}</div>
      </div>
    </li>
  );
}

/*
TODO: 
- napraviti css styles i implementirati css,
- dovrsiti return od Message

*/
