import {createElement, render, useRef, useEffect } from 'rax';
import * as DriverDOM from 'driver-dom';
import { isWeex } from 'universal-env';
import * as DriverWeex from 'driver-weex';
import View from '../src/index';

const App = () => {
  const viewRef = useRef(null);

  useEffect(() => {
    console.log('viewRef', viewRef.current);
  });

  return <View ref={viewRef} style={{
    height: 200,
    width: 200,
    background: '#ff6600'
  }} ><span>hahah</span></View>
};

render(<App />, document.body, { driver: isWeex ? DriverWeex : DriverDOM });
