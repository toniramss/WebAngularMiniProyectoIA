import { AccuracyPoint } from "./accuracyPoint";

export interface KnnCurve {
    min_k: number;
    max_k: number;
    points: AccuracyPoint[]
}