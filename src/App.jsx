import ChatHeader from './components/ChatHeader';
import ChatMessages from './components/ChatMessages';
import ChatInput from './components/ChatInput';
import { useChat } from './hooks/useChat';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  const { messages, isLoading, sendMessage } = useChat();

  return (
    <ThemeProvider>
      <div className="flex flex-col h-screen bg-gray-100 dark:bg-gray-900 transition-colors">
        <ChatHeader />
        <ChatMessages messages={messages} isLoading={isLoading} />
        <ChatInput onSendMessage={sendMessage} isLoading={isLoading} />
      </div>
    </ThemeProvider>
  );
}

export default App;