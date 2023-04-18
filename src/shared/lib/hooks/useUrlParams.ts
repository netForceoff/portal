import { createSearchParams, URLSearchParamsInit, useSearchParams } from 'react-router-dom'
import { useLatest } from './useLatest'
import { useCallback } from 'react'

const useUrlParams = (params: URLSearchParamsInit): [URLSearchParams, () => void] => {
  const [searchParams, setSearchParams] = useSearchParams()
  const latestParams = useLatest(createSearchParams(params))

  const set = useCallback(() => {
    setSearchParams(latestParams.current)
  }, [latestParams])

  return [searchParams, set]
}

export default useUrlParams
