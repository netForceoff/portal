import { FC, ReactNode, useEffect, MutableRefObject } from 'react'
import { useAppDispatch } from 'app/providers/store'
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getScroll } from '../model/selectors'
import { withReducers } from 'shared/lib'
import { saveScrollPositionActions, saveScrollPositionReducer } from '../model/slice'
import useDebounce from 'shared/lib/hooks/useDebounce'

export interface ISaveScrollPositionProps extends JSX.IntrinsicAttributes {
  containerRef: MutableRefObject<HTMLElement | null>
  children?: ReactNode
}

const reducers = {
  scrollPosition: saveScrollPositionReducer
}

const SaveScrollPosition: FC<ISaveScrollPositionProps> = (props) => {
  const { containerRef, children } = props
  const dispatch = useAppDispatch()
  const { pathname } = useLocation()
  const scrollPosition = useSelector(getScroll)

  const callback = () => {
    dispatch(saveScrollPositionActions.setScrollPosition({ path: pathname, position: containerRef?.current?.scrollTop || 0 }))
  }

  const debounced = useDebounce(callback, 1000)

  useEffect(() => {
    console.log(containerRef.current, 'current')
    containerRef?.current?.scroll(0, scrollPosition?.[location.pathname] || 0)

    if (containerRef.current) {
      containerRef.current.addEventListener('scroll', debounced)
    }

    return () => {
      containerRef?.current?.removeEventListener('scroll', debounced)
    }
  }, [debounced, containerRef])

  return <>{children}</>
}

export default withReducers(SaveScrollPosition, reducers, false)
