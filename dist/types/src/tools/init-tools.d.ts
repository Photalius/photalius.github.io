import { ZoomTool } from './zoom-tool';
import { PhotaliusCanvas } from './canvas/photalius-canvas';
import { ObjectTool } from '../objects/object-tool';
import { HistoryTool } from './history/history-tool';
import { MergeTool } from './merge/merge-tool';
import { FilterTool } from './filter/filter-tool';
import { ResizeTool } from './resize/resize-tool';
import { CropTool } from './crop/crop-tool';
import { ShapeTool } from './shapes/shape-tool';
import { FrameTool } from './frame/frame-tool';
import { TextTool } from './text/text-tool';
import { DrawTool } from './draw/draw-tool';
import { ImportTool } from './import/import-tool';
import { WatermarkTool } from './export/watermark-tool';
import { ExportTool } from './export/export-tool';
import { CornersTool } from './corners/corners-tool';
import { TransformTool } from './transform/transform-tool';
export interface Tools {
    filter: FilterTool;
    history: HistoryTool;
    objects: ObjectTool;
    canvas: PhotaliusCanvas;
    zoom: ZoomTool;
    resize: ResizeTool;
    crop: CropTool;
    merge: MergeTool;
    shape: ShapeTool;
    frame: FrameTool;
    text: TextTool;
    draw: DrawTool;
    transform: TransformTool;
    import: ImportTool;
    watermark: WatermarkTool;
    export: ExportTool;
    corners: CornersTool;
}
export declare function initTools(canvasEl: HTMLCanvasElement): void;
