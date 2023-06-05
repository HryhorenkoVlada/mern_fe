import { Suspense } from 'react';

import LazyLoadingFallback from './LazyLoadingFallback';

const LazyLoadingRoute = ({ children }) => {
  return <Suspense fallback={LazyLoadingFallback}>{children}</Suspense>;
};

export default LazyLoadingRoute;
