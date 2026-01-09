export interface KnnResult {
    k: number;
    accuracy: number;
    precision: number;
    recall: number;
    f1: number;
    tp: number;
    fp: number;
    fn: number;
    tn: number;
}