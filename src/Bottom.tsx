import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { textState } from './atom';

function Bottom() {
  const [text, setText] = useState('');
  const setRecoilText = useSetRecoilState(textState);

  const onChange = (e: any) => {
    setText(e.target.value);
    setRecoilText(text);
  };

  return <input value={text} onChange={onChange} />;
}

export default Bottom;
