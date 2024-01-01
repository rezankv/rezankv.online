import React, { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {}

const Loader = ({ className, ...rest }: Props) => {
  return (
    <div className=" ml-4 w-4 h-4 rounded-full animate-type" {...rest}></div>
  );
};

export default Loader;
