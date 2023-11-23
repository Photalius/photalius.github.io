import { GetState } from 'zustand';
import { Draft } from 'immer';
import { HistorySlice } from '../tools/history/state/history-slice';
import { FilterSlice } from '../tools/filter/filter-slice';
import { CropSlice } from '../tools/crop/crop-slice';
import { ObjectsSlice } from '../objects/state/objects-slice';
import { FrameSlice } from '../tools/frame/frame-slice';
import { ResizeSlice } from '../tools/resize/state/resize-slice';
import { EditorState } from './editor-state';
import { CornersSlice } from '../tools/corners/corners-slice';
export type StoreSlice<T> = (set: (partial: ((draft: Draft<PhotaliusState>) => void) | Partial<PhotaliusState>, replace?: boolean) => void, get: GetState<PhotaliusState>) => T;
export type PhotaliusState = EditorState & HistorySlice & ObjectsSlice & FilterSlice & CropSlice & FrameSlice & ResizeSlice & CornersSlice;
export declare const useStore: import("zustand").UseBoundStore<Omit<Omit<import("zustand").StoreApi<PhotaliusState>, "subscribe"> & {
    subscribe: {
        (listener: (selectedState: PhotaliusState, previousSelectedState: PhotaliusState) => void): () => void;
        <U>(selector: (state: PhotaliusState) => U, listener: (selectedState: U, previousSelectedState: U) => void, options?: {
            equalityFn?: ((a: U, b: U) => boolean) | undefined;
            fireImmediately?: boolean | undefined;
        } | undefined): () => void;
    };
}, "setState"> & {
    setState(nextStateOrUpdater: PhotaliusState | Partial<PhotaliusState> | ((state: import("immer/dist/internal").WritableDraft<PhotaliusState>) => void), shouldReplace?: boolean | undefined): void;
}>;
