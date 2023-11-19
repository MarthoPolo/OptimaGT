import React from 'react'
import Chatbot from 'react-chatbot-kit'
import config from './Chatbot/config.js';
import MessageParser from './Chatbot/MessageParser.js';
import ActionProvider from './Chatbot/ActionProvider.js';
import "../../App.css"


export const Login = () => {
  return (
  <div className="App">
    <div className="align-middle justify-center text-center" style={{maxWidth: "300px"}}>
        <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
        />
      </div>
  </div>
  )
}
