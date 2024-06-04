export function getFullYear() {
    return new Date().getFullYear();
  }
  

export function getFooterCopy(isIndex) {
    return isIndex ? 'Holberton School' : 'Holberton School main dashboard';
  }
  
  export const getLatestNotification = () =>
    '<strong>Urgent Requirement</strong> - complete by EOD';