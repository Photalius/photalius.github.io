import { SerializedPhotaliusState } from './serialized-photalius-state';
import { HistoryItem } from './history-item.interface';
import { HistoryName } from './history-display-names';
export declare class HistoryTool {
    /**
     * Undo last canvas operation.
     */
    undo(): Promise<void>;
    /**
     * Redo last canvas operation.
     */
    redo(): Promise<void>;
    /**
     * Check if there are any actions to undo.
     */
    canUndo(): boolean;
    /**
     * Check if there are any actions to redo.
     */
    canRedo(): boolean;
    /**
     * Reload current history state, undoing any actions that were not yet applied.
     */
    reload(): Promise<any>;
    /**
     * Replace current history item with current canvas state.
     */
    replaceCurrent(): void;
    /**
     * Create a new history item from current canvas state.
     */
    addHistoryItem(params: {
        name: HistoryName;
        state?: SerializedPhotaliusState;
    }): void;
    /**
     * Replace current canvas state with specified history item.
     */
    load(item: HistoryItem): Promise<any>;
    /**
     * @hidden
     */
    addInitial(stateObj?: SerializedPhotaliusState): void;
}
