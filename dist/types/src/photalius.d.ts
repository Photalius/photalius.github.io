import { Canvas } from 'fabric/fabric-impl';
import { PhotaliusConfig } from './config/default-config';
import { ObjectModifiedEvent } from './objects/object-modified-event';
import type { Tools } from './tools/init-tools';
import { EditorState } from './state/editor-state';
import { SerializedPhotaliusState } from './tools/history/serialized-photalius-state';
import { ToolName } from './tools/tool-name';
import 'fabric/src/mixins/eraser_brush.mixin';
export declare class Photalius {
    tools: Tools;
    fabric: Canvas | null;
    static defaultConfig: PhotaliusConfig;
    static version: string;
    get state(): import("./state/store").PhotaliusState;
    get defaultConfig(): PhotaliusConfig;
    constructor(config: Partial<PhotaliusConfig>);
    /**
     * Open editor.
     */
    open(config?: Partial<PhotaliusConfig>): Promise<void>;
    /**
     * Close editor.
     */
    close(): void;
    /**
     * Override editor configuration.
     */
    setConfig(config: Partial<PhotaliusConfig>): void;
    /**
     * Open file upload window and add selected image to canvas.
     */
    uploadAndAddImage(): Promise<void>;
    /**
     * Open file upload window and replace canvas contents with selected image.
     */
    uploadAndReplaceMainImage(): Promise<void>;
    /**
     * Open file upload window and replace canvas contents with selected state file.
     */
    uploadAndOpenStateFile(): Promise<void>;
    /**
     * Clear current canvas and open a new one at specified size.
     */
    newCanvas(width: number, height: number, bgColor?: string): Promise<{
        width: number;
        height: number;
    }>;
    /**
     * Get current canvas state as json string.
     */
    getState(customProps?: string[]): string;
    /**
     * Replace current canvas contents with specified photalius state.
     */
    setState(data: string | SerializedPhotaliusState): Promise<void>;
    /**
     * Replace current canvas contents with photalius state file loaded from specified url.
     */
    setStateFromUrl(url: string): Promise<void>;
    /**
     * Open specified tool (crop, draw, text etc.)
     */
    openTool(name: ToolName): void;
    /**
     * Apply any pending changes from currently open tool.
     * This is identical to clicking "apply" button in the editor.
     */
    applyChanges(): void;
    /**
     * Cancel any pending changes from currently open tool.
     * This is identical to clicking "cancel" button in the editor.
     */
    cancelChanges(): void;
    /**
     * Fully reset editor state and optionally
     * override specified configuration.
     */
    resetEditor(config?: Partial<PhotaliusConfig>): Promise<void>;
    /**
     * Toggle specified floating panel.
     */
    togglePanel(name: keyof EditorState['openPanels'], isOpen?: boolean): void;
    /**
     * Listen to specified canvas event.
     * (List of all available events can be found in the documentation)
     */
    on(event: 'object:modified', handler: (e: ObjectModifiedEvent) => void): void;
    /**
     * Check if any modifications made to canvas have not been applied yet.
     */
    isDirty(): boolean;
    /**
     * @hidden
     */
    get(name: keyof Tools): import("./tools/merge/merge-tool").MergeTool | import("./tools/export/export-tool").ExportTool | import("./tools/crop/crop-tool").CropTool | import("./tools/resize/resize-tool").ResizeTool | import("./tools/corners/corners-tool").CornersTool | import("./tools/history/history-tool").HistoryTool | import("./tools/transform/transform-tool").TransformTool | import("./tools/zoom-tool").ZoomTool | import("./tools/canvas/photalius-canvas").PhotaliusCanvas | import("./tools/import/import-tool").ImportTool | import("./tools/frame/frame-tool").FrameTool | import("./objects/object-tool").ObjectTool | import("./tools/filter/filter-tool").FilterTool | import("./tools/shapes/shape-tool").ShapeTool | import("./tools/text/text-tool").TextTool | import("./tools/draw/draw-tool").DrawTool | import("./tools/export/watermark-tool").WatermarkTool;
    /**
     * Display specified notification message in the editor.
     */
    notify(message: string): void;
    /**
     * Create a new editor instance.
     */
    static init(config: PhotaliusConfig): Promise<Photalius>;
}
