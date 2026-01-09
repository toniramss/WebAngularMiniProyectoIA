import { KnnCurve } from "../interfaces/knnCurve";
import { KnnResult } from "../interfaces/knnResult";



const baseApiUrl = "http://localhost:8000/";



export async function getKnnResult(k: Number) {

    let knnResult: KnnResult = {
        k: 0,
        accuracy: 0,
        precision: 0,
        recall: 0,
        f1: 0,
        tp: 0,
        fp: 0,
        fn: 0,
        tn: 0
    };

    try {

        let response = await fetch(baseApiUrl + 'knn?k=' + k);

        knnResult = await response.json();

    } catch (error) {
        console.log("Error al obtener el resultado de KNN: ", error);
    }

    return knnResult;

}


export async function getKnnCurve() {

    let knnCurve: KnnCurve = {
        min_k: 0,
        max_k: 0,
        points: []
    };

    try {

        let response = await fetch(baseApiUrl + 'knn/curve');

        knnCurve = await response.json();

    } catch (error) {
        console.log("Error al obtener la curva de KNN: ", error);
    }

    return knnCurve;

}