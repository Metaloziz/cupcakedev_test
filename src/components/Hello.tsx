import { FC, useState } from 'react';
import React from "react";

export const Hello: FC = () => {

  const [value, setValue] = useState(1)

  const valueHandel = () => {
    setValue((prev) => prev + 1)
  }

  return (
    <div>
      <div onClick={valueHandel}>{value}</div>

    </div>
  );
};
