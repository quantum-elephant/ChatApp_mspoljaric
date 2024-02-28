export default function Input({
  messages,
  user,
  setMessages,
  generateUniqueId,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const newInput = e.target.my_input.value;
    if (newInput !== null && newInput !== '') {
      const newMessageId = generateUniqueId();
      const newMessage = {
        data: newInput,
        id: newMessageId,
        member: {
          clientId: user.clientId,
          clientData: {
            color: user.clientData.color,
            username: user.clientData.username,
          },
        },
      };
      setMessages([...messages, newMessage]);
      // console.log(newMessage);
    } else {
    }
    e.target.reset();
  };

  return (
    <div className='chat-input'>
      <form className='form' method='post' onSubmit={handleSubmit}>
        <input name='my_input' placeholder='Message'></input>
        <button type='submit'>Send</button>
      </form>
    </div>
  );
}
