export interface AnalyticsComponentDescription {
    id: number;
    title: string;
    description: string;
    unit: string;
    range: string;
    avg: number
    relation: 'Positiva' | 'Negativa' | 'Débil' | "Objetivo" | "Muy positiva" | "No directa"; // relación con la calidad del vino
}