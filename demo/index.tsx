import {createElement, render} from 'rax';
import * as DriverDOM from 'driver-dom';
import { isWeex } from 'universal-env';
import * as DriverWeex from 'driver-weex';
import View from '../src/index';

render(<View style={{
  height: 200,
  width: 200,
  background: '#ff6600'
}} />, document.body, { driver: isWeex ? DriverWeex : DriverDOM });
