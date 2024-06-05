export const isMobileDevice = () => {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;

  // Detect iOS
  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    return true;
  }

  // Detect Android
  if (/android/i.test(userAgent)) {
    return true;
  }

  // Detect other mobile browsers
  if (
    /Mobile|Android|Silk|Kindle|BlackBerry|Opera Mini|Opera Mobi/i.test(
      userAgent
    )
  ) {
    return true;
  }

  return false;
};
