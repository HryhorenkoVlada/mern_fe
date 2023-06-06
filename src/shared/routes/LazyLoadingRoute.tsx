import { PropsWithChildren, Suspense } from 'react';
import type { FC } from 'react';

const LazyLoadingRoute: FC<PropsWithChildren> = ({ children }) => {
  return <Suspense fallback={<p>Loading...</p>}>{children}</Suspense>;
};

export default LazyLoadingRoute;
