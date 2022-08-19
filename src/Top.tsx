// src/Top.tsx

import React from 'react';
import { useRecoilValue } from 'recoil';
import { textState } from './atom';
import Middle from './Middle';

function Top() {
  const text = useRecoilValue(textState);
  return (
    <>
      <Middle />
      top : {text}
    </>
  );
}

export default Top;
