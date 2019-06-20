import {createElement, render, useRef, useEffect } from 'rax';
import DU from "driver-universal"
import Text from 'rax-text'
import View from '../src/index';

const App = () => {
  const viewRef = useRef(null);

  useEffect(() => {
    console.log('viewRef', viewRef.current);
  });

  return <View ref={viewRef} style={{
    height: 200,
    width: 200,
    backgroundColor: '#ff6600'
  }} ><Text>asdf</Text></View>
};

render(<App />, document.body, { driver: DU });
