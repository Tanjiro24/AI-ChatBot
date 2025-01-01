const MessageLine = ({ line, index }) => {
    if (line.isHeading) {
      const headingSize = {
        1: 'text-xl',
        2: 'text-lg',
        3: 'text-base'
      }[line.headingLevel] || 'text-base';
      
      return (
        <div className={`${headingSize} font-bold ${index > 0 ? 'mt-4 mb-2' : 'mb-2'}`}>
          {line.text}
        </div>
      );
    }
  
    return (
      <div className={`${line.isBulletPoint ? 'pl-4 relative' : ''} ${index > 0 ? 'mt-2' : ''}`}>
        {line.isBulletPoint && (
          <span className="absolute left-0 text-blue-500 dark:text-blue-400">•</span>
        )}
        {line.text}
      </div>
    );
  };
  
  export default MessageLine;