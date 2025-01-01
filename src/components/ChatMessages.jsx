import ChatMessage from './ChatMessage';
import LoadingDots from './LoadingDots';
import { useScrollToBottom } from '../hooks/useScrollToBottom';

const ChatMessages = ({ messages, isLoading }) => {
  const bottomRef = useScrollToBottom([messages, isLoading]);

  return (
    <div className="flex-1 overflow-y-auto p-4">
      <div className="max-w-2xl mx-auto space-y-4">
        {messages.map((message, index) => (
          <ChatMessage
            key={index}
            message={message.text}
            isBot={message.isBot}
          />
        ))}
        {isLoading && (
          <div className="flex justify-start mb-4">
            <div className="bg-gray-200 dark:bg-gray-700 rounded-lg px-4 py-2">
              <LoadingDots />
            </div>
          </div>
        )}
        <div ref={bottomRef} />
      </div>
    </div>
  );
};

export default ChatMessages;