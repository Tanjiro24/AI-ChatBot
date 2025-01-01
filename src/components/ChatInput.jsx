import { useState } from 'react';

const ChatInput = ({ onSendMessage, isLoading }) => {
  const [inputMessage, setInputMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;
    
    onSendMessage(inputMessage);
    setInputMessage('');
  };

  return (
    <div className="bg-white dark:bg-gray-800 border-t dark:border-gray-700 p-4">
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto flex gap-2">
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 p-2 border rounded-lg focus:outline-none focus:border-blue-500 
                   dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400"
          disabled={isLoading}
        />
        <button
          type="submit"
          className={`px-4 py-2 rounded-lg transition-colors ${
            isLoading 
              ? 'bg-gray-400 dark:bg-gray-600 cursor-not-allowed'
              : 'bg-blue-500 hover:bg-blue-600 text-white'
          }`}
          disabled={isLoading}
        >
          {isLoading ? 'Sending...' : 'Send'}
        </button>
      </form>
    </div>
  );
};

export default ChatInput;