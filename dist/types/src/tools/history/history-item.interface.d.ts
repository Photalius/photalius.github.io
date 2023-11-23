import { SerializedPhotaliusState } from './serialized-photalius-state';
import { HistoryName } from './history-display-names';
export interface HistoryItem extends SerializedPhotaliusState {
    name: HistoryName;
    id: string;
}
