const useTouchEvent = () => {
  const isMobile = window.matchMedia

  if (!isMobile) {
    return false
  }

  return isMobile('(pointer:coarse)').matches
}

export default useTouchEvent
