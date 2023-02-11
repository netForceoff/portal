import { lazy } from "react";
import { withSuspense } from "shared/lib";

const App = lazy(() => import('./App'));

export default withSuspense(App);