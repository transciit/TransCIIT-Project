/* eslint-disable tailwindcss/no-custom-classname */
import type { ReactNode } from "react";

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="w-full antialiased">
    {props.meta}

    <div className="mx-auto">
      <main className="content">{props.children}</main>
    </div>
  </div>
);

export { Main };
