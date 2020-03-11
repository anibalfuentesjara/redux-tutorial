import React from 'react';
import _ from "lodash";
import './ChatWindow.css';
import Header from '../components/Header';
import Chats from "../components/Chats";
import MessageInput from "./MessageInput";
import store from "../store";


const ChatWindow = ({ activeUserId }) => {
  const state = store.getState();
  const { typing } = state;
  const activeUser = state.contacts.contacts[activeUserId];
  const activeUserMessages = state.messages[activeUserId];
  return (
  	<div className="ChatWindow"> 
  	  <Header user={ activeUser } />
  	  <Chats messages={ _.values(activeUserMessages) } />
  	  <MessageInput value={typing} />
  	</div>
  );
};

export default ChatWindow;