import { useRef, useCallback, useEffect } from 'react'
import { useLatest } from './useLatest'

const useThrottle = <T extends (...args: any[]) => void>(callback: T, delay: number = 500) => {
  const throttleRef = useRef<boolean>(false)
  const latestCb = useLatest(callback)
  const timeoutRef = useRef<NodeJS.Timeout | undefined>(undefined)

  useEffect(() => () => { clearTimeout(timeoutRef.current) }, [timeoutRef])

  return useCallback((...args: any[]) => {
    if (!throttleRef.current) {
      latestCb.current.apply(null, args)
      throttleRef.current = true

      timeoutRef.current = setTimeout(() => {
        throttleRef.current = false
      }, delay)
    }
  }, [latestCb, throttleRef, delay, timeoutRef])
}

export default useThrottle
