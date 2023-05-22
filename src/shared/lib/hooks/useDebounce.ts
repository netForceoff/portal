import { useRef, useCallback, useEffect } from 'react'

import { useLatest } from './useLatest'

const useDebounce = <T extends (...args: any[]) => void>(callback: T, delay: number = 500) => {
  const timeoutRef = useRef<NodeJS.Timeout | undefined>(undefined)
  const latestCb = useLatest(callback)

  useEffect(() => () => { clearTimeout(timeoutRef.current) }, [timeoutRef])

  return useCallback((...args: Parameters<T>) => {
    clearTimeout(timeoutRef.current)

    timeoutRef.current = setTimeout(() => {
      latestCb.current.apply(null, args)
    }, delay)
  }, [latestCb, timeoutRef, delay])
}

export default useDebounce
