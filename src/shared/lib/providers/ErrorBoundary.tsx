import { Component, ErrorInfo, ReactNode } from 'react'

interface IProps {
  fallback: JSX.Element | ReactNode
  children: JSX.Element
}

interface IState {
  hasError: boolean
}

class ErrorBoundary extends Component<IProps, IState> {
  constructor (props: IProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError (): IState {
    return { hasError: true }
  }

  componentDidCatch (error: Error, errorInfo: ErrorInfo): void {
    console.group('ERRROR BOUNDARY')
    console.error(error, 'COMMON ERROR')
    console.error(errorInfo, 'ERROR INFO')
    console.groupEnd()
  }

  render (): JSX.Element | ReactNode {
    const { fallback, children } = this.props
    const { hasError } = this.state

    if (hasError) {
      return fallback
    }

    return children
  }
}

export default ErrorBoundary
