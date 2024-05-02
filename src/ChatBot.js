// import React, { useState } from 'react';
// import './ChatBot.css';


// const ChatBot = () => {
//   const [messages, setMessages] = useState([]);

//   const handleSendMessage = (message) => {
//     const newUserMessage = { text: message, sender: 'user' };
//     const newMessages = [...messages, newUserMessage]; // Store user's message separately
//     setMessages(newMessages);
    
//     setTimeout(() => {
//       let replyMessage;
//       switch (message.toLowerCase()) {
//         case 'hello':
//           replyMessage = { text: 'Hi there! How can I help you?', sender: 'bot' };
//           break;
//         case 'how are you?':
//           replyMessage = { text: 'I am just a bot, but thank you for asking!', sender: 'bot' };
//           break;
//         case 'what can you do?':
//           replyMessage = { text: 'I can provide information, answer questions, and assist you with various tasks.', sender: 'bot' };
//           break;
//         default:
//           replyMessage = { text: "I'm just a simple chatbot. How can I assist you?", sender: 'bot' };
//       }
//       setMessages([...newMessages, replyMessage]); // Append bot's response to user's messages
//     }, 1000);
//   };

//   return (
//     <div>
//       <div style={{ height: '300px', overflowY: 'scroll', border: '1px solid #ccc', marginBottom: '10px' }}>
//         {messages.map((message, index) => (
//           <div key={index} style={{ padding: '5px', borderBottom: '1px solid #eee', backgroundColor: message.sender === 'user' ? '#f0f0f0' : '#fff' }}>
//             <strong>{message.sender === 'user' ? 'You' : 'Bot'}:</strong> {message.text}
//           </div>
//         ))}
//       </div>
//       <input type="text" placeholder="Type a message..." onKeyPress={(e) => {
//         if (e.key === 'Enter') {
//           handleSendMessage(e.target.value);
//           e.target.value = '';
//         }
//       }} style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} />
//     </div>
//   );
// };

// export default ChatBot;


import React, { useState } from 'react';
import './ChatBot.css';

const ChatBot = () => {
  const [messages, setMessages] = useState([]);

  const handleSendMessage = (message) => {
    const newUserMessage = { text: message, sender: 'user' };
    const newMessages = [...messages, newUserMessage];
    setMessages(newMessages);
    
    setTimeout(() => {
      let replyMessage;
      switch (message.toLowerCase()) {
        case 'hello':
          replyMessage = { text: 'Hi there! How can I help you?', sender: 'bot' };
          break;
        case 'how are you?':
          replyMessage = { text: 'I am just a bot, but thank you for asking!', sender: 'bot' };
          break;
        case 'what can you do?':
          replyMessage = { text: 'I can provide information, answer questions, and assist you with various tasks.', sender: 'bot' };
          break;
        case 'how can pcos be treated?' :
          replyMessage={text:'Some symptoms of PCOS can be reduced through lifestyle changes. Eating a healthy diet and getting enough exercise can help reduce weight and reduce the risk of type 2 diabetes. Birth control medicines (contraceptive pill) can help regulate the menstrual cycle and reduce symptoms. Other medicines can reduce acne or unwanted hair growth caused by PCOS.',sender: 'bot' };
          break;  
        case 'what is pcos?' :
          replyMessage={text:'Polycystic ovary syndrome (PCOS) is a common hormonal condition that affects women of reproductive age. It usually starts during adolescence, but symptoms may fluctuate over time. PCOS can cause hormonal imbalances, irregular periods, excess androgen levels and cysts in the ovaries. Irregular periods, usually with a lack of ovulation, can make it difficult to become pregnant.',sender: 'bot' };
          break;
        
        default:
          replyMessage = { text: "I'm just a simple chatbot. How can I assist you?", sender: 'bot' };
      }
      setMessages([...newMessages, replyMessage]);
    }, 1000);
  };

  return (
    <div>
      <div className="chat-container">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender === 'user' ? 'user-message' : 'bot-message'}`}>
            <strong>{message.sender === 'user' ? 'You' : 'Bot'}:</strong> {message.text}
          </div>
        ))}
      </div>
      <input
        type="text"
        placeholder="Type a message..."
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            handleSendMessage(e.target.value);
            e.target.value = '';
          }
        }}
        className="input-box"
      />
    </div>
  );
};

export default ChatBot;

