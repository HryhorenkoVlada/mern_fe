import type { FC, PropsWithChildren } from 'react';

import './MainHeader.scss';

const MainHeader: FC<PropsWithChildren> = ({ children }) => {
  return <header className="main-header">{children}</header>;
};

export default MainHeader;
