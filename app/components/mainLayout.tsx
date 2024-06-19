import React from "react";
type Props = { children: React.ReactNode; cn: string };

function Layout({ children, cn }: Props) {
  return (
    //todo:make the bellow div responsive consuming the remaining height of the page and center items horizonally and vertically
    <div className={cn}>{children}</div>
  );
}

export default Layout;
