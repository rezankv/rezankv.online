"use client";
import { motion } from "framer-motion";

import React, { HTMLAttributes } from "react";
import Loader from "../Loader";
import { useTimer } from "@app/hooks";

interface Props extends HTMLAttributes<HTMLDivElement> {
  loadingDuration: number;
  text: string;
}

const Bubble = ({
  loadingDuration,
  text,
  className,
  style,
  ...rest
}: Props) => {
  const isLoading = !useTimer({ time: loadingDuration });
  return (
    <>
      
      <div
        style={{ transition: "all .2s ease" }}
        className={` rounded-[28px] ${
          isLoading ? "rounded-bl-none" : ""
        } p-3 bg-gray-300    max-w-fit px-7 `}
        {...rest}
      >
        {isLoading ? (
          <Loader />
        ) : (
          <p className={`opacity-0 ${!isLoading && "opacity-100"}`}>{text}</p>
        )}
      </div>
    </>
  );
};

export default Bubble;
