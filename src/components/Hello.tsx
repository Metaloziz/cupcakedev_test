import { FC, useState, useEffect } from 'react';
import React from "react";
import { api } from "../api/api";

export const Hello: FC = () => {

  const [value, setValue] = useState(1)

  const valueHandel = () => {
    setValue((prev) => prev + 1)
  }

  useEffect( () => {
   api.getData()
  }, [])

  return (
    <div>
      <div onClick={valueHandel}>{value}</div>
    </div>
  );
};
