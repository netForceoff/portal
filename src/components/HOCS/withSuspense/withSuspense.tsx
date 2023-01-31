import {ComponentType, ReactNode, Suspense} from "react";

function withSuspense <P>(Component: ComponentType<P>, fallback: ReactNode = 'Загрузка...') {
    return (props: P) => {
        return (
            <Suspense fallback={fallback}>
                <Component {...props} />
            </Suspense>
        )
    }
}

export default withSuspense;
