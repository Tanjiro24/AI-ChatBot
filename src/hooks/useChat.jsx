import { useState } from 'react';
import { generateResponse } from '../services/geminiService';

export function useChat() {
  const [messages, setMessages] = useState([
    { text: "Hello! How can I help you today?", isBot: true }
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async (message) => {
    if (!message.trim()) return;

    // Add user message
    const newMessages = [
      ...messages,
      { text: message, isBot: false }
    ];
    setMessages(newMessages);

    // Get bot response
    setIsLoading(true);
    try {
      const response = await generateResponse(message);
      setMessages([
        ...newMessages,
        { text: response, isBot: true }
      ]);
    } catch (error) {
      console.error('Chat error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    messages,
    isLoading,
    sendMessage
  };
}