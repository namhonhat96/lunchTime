import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
import './App.css';

const projectID = '3256361b-5f0a-417d-a70f-8ff3bf93c4d0';

const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;
  if( localStorage.getItem('signUp')) return <SignUpForm />;

  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderIsTyping={(chatAppProps)=> <div>isTyping</div>} 
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
  );
};
export default App;
