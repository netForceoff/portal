import { ComponentType, ReactNode, Suspense } from 'react'

function withSuspense <P extends JSX.IntrinsicAttributes> (Component: ComponentType<P>, fallback: ReactNode = 'Загрузка...') {
  return function HOC (props: P) {
    return (
            <Suspense fallback={fallback}>
                <Component {...props} />
            </Suspense>
    )
  }
}

export default withSuspense
