import { formatMessage } from '../utils/messageFormatter';
import MessageLine from './message/MessageLine';

const ChatMessage = ({ message, isBot }) => {
  const formattedLines = formatMessage(message);

  return (
    <div className={`flex ${isBot ? 'justify-start' : 'justify-end'} mb-4`}>
      <div
        className={`${
          isBot
            ? 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
            : 'bg-blue-500 text-white'
        } rounded-lg px-4 py-2 max-w-[70%]`}
      >
        <div className="text-sm whitespace-pre-wrap">
          {formattedLines.map((line, index) => (
            <MessageLine key={index} line={line} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;