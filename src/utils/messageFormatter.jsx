export const formatMessage = (message) => {
    const lines = message.split("\n");
    
    return lines.map((line) => {
      const trimmedLine = line.trim();
      
      // Detect headings (lines starting with #)
      if (trimmedLine.startsWith('#')) {
        return {
          isHeading: true,
          text: trimmedLine.replace(/^#+\s*/, ''),
          headingLevel: (trimmedLine.match(/^#+/) || [''])[0].length
        };
      }
      
      // Detect bullet points
      const isBulletPoint = /^\d+\.\s|^\*\s|^-\s/.test(trimmedLine);
      
      // Detect special symbols (e.g., ℹ️, ⚠️, 💡)
      const hasSymbol = /^[📝|ℹ️|⚠️|💡|✨|🔍|💪|🎯|⭐️]/.test(trimmedLine);
      
      return {
        isBulletPoint,
        hasSymbol,
        text: trimmedLine
      };
    });
  };