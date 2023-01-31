import {lazy} from "react";
import withSuspense from "../HOCS/withSuspense/withSuspense";

const LazyAbout = lazy(() => import('./About'));

export default withSuspense(LazyAbout);
