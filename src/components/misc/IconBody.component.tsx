import React, { ReactNode } from "react";
import style from "../../styles/iconbody.module.css";

interface Props {
  icon: ReactNode;
  link: string;
}

const IconBody = ({ icon, link }: Props) => {
  return (
      <a className={style.body} target="_blank" rel="noreferrer" href={link}>
        {icon}
      </a>
  );
};

export default IconBody;
