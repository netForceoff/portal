import { lazy } from "react";
import { withSuspense } from "shared/lib";

const About = lazy(() => import('./ui/About'));

export default withSuspense(About);