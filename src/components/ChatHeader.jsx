import ThemeToggle from './ThemeToggle';

const ChatHeader = () => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-md p-4">
      <div className="max-w-2xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">AI Chatbot</h1>
        <ThemeToggle />
      </div>
    </div>
  );
};

export default ChatHeader;