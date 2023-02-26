import { FC, useEffect } from 'react'

interface IProps {
  codes: string[]
  callback: () => void
  children: JSX.Element
}

const KeydownWrapper: FC<IProps> = (props): JSX.Element => {
  const { codes, callback, children } = props

  useEffect(() => {
    const handleKeydown = (event: KeyboardEvent): void => {
      if (codes.includes(event.code)) {
        callback()
      }
    }

    window.addEventListener('keydown', handleKeydown)

    return () => {
      window.removeEventListener('keydown', handleKeydown)
    }
  }, [codes])

  return children
}

export default KeydownWrapper
