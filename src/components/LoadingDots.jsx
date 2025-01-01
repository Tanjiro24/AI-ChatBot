const LoadingDots = () => {
    return (
      <div className="flex space-x-1 items-center">
        <div className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full animate-[bounce_1s_infinite_0ms]"></div>
        <div className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full animate-[bounce_1s_infinite_200ms]"></div>
        <div className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full animate-[bounce_1s_infinite_400ms]"></div>
      </div>
    );
  };
  
  export default LoadingDots;