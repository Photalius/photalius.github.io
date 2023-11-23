import { Canvas } from 'fabric/fabric-impl';
import type { Tools } from '../tools/init-tools';
import type { PhotaliusState } from './store';
export declare function state(): PhotaliusState;
export declare function tools(): Tools;
export declare function fabricCanvas(): Canvas;
