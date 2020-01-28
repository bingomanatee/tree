import React, { useState } from 'react';
import {Center} from './styles';
import styled from 'styled-components';

const Input = styled.input`
padding: 2px;
background-color: rgb(20,20,20);
border: none;
border-bottom: rgb(50,50,50);
marign-right: 1rem;
color: rgb(200,200,255);
outline: none;
    font-family: 'Monospaced Number', 'Chinese Quote', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-size: 14px;
    line-height: 21px;
`

let lastSetDone = null;

export default ({}) => {
  const [content, setContent] = useState('click to edit');
  const [done, setDone] = useState(true);

  function open() {
    if (lastSetDone) lastSetDone(false);
    setDone(false);
    lastSetDone = setDone;
  }

  function close() {
    setDone(true);
    if (lastSetDone === setDone) lastSetDone = null;
  }

  return done ? <div onClick={open}>{content}</div> :
    <>
      <Input type="text" value={content} onChange={(e) => setContent(e.target.value)} />
      <button onClick={close}>Done</button>
    </>
}
/**
 <input type="text" value={content} onChange={(e) => setContent(e.target.value)} />
 <button onClick={() => setDone(true)}>Done</button>
 **/
