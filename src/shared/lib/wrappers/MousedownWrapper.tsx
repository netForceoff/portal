import { ReactNode, FC, useEffect, useRef } from 'react'

interface IProps {
  className?: string
  callback: () => void
  children: ReactNode
}

const MousedownWrapper: FC<IProps> = (props) => {
  const { className, callback, children } = props
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMousedown = (event: Event): void => {
      const { current } = ref

      if (current) {
        const target = event.target

        if (target instanceof HTMLElement && !current.contains(target)) {
          callback()
        }
      }
    }

    document.addEventListener('mousedown', handleMousedown)

    return () => {
      document.removeEventListener('mousedown', handleMousedown)
    }
  }, [ref])
  return (
        <div ref={ref} className={className}>
            {children}
        </div>
  )
}

export default MousedownWrapper
