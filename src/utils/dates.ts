export function hasFiftyMinutesPassed(sinceDate: Date | string): boolean {
    const currentTime = new Date();
    
    const parseTime = typeof sinceDate === "string" ? new Date(sinceDate) : sinceDate
    
    const timeDifference = currentTime.getTime() - parseTime.getTime();
    const minutesPassed = timeDifference / (1000 * 60); // Convert milliseconds to minutes
  
    return minutesPassed >= 50;
  }