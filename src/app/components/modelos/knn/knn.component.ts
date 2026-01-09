import {
  Component,
  ViewChild,
  ElementRef,
  AfterViewInit,
  OnDestroy,
  inject
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PLATFORM_ID } from '@angular/core';

import Chart from 'chart.js/auto';
import { AccuracyPoint } from '../../../interfaces/accuracyPoint';
import { KnnCurve } from '../../../interfaces/knnCurve';
import { getKnnCurve, getKnnResult } from '../../../DBManagement/DBManagement';

@Component({
  selector: 'app-knn',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './knn.component.html',
  styleUrl: './knn.component.css'
})
export class KnnComponent implements AfterViewInit, OnDestroy {

  private platformId = inject(PLATFORM_ID);
  private isBrowser = isPlatformBrowser(this.platformId);

  @ViewChild('accuracyCanvas', { static: false })
  accuracyCanvas?: ElementRef<HTMLCanvasElement>;

  private chart?: Chart;

  k = 5;
  readonly MIN_K = 1;
  readonly MAX_K = 25;

  knnResult = {
    k: 0,
    accuracy: 0,
    precision: 0,
    recall: 0,
    f1: 0,
    tp: 0,
    fp: 0,
    fn: 0,
    tn: 0
  }

  knnCurve: KnnCurve = {
    min_k: 0,
    max_k: 0,
    points: []
  }

  /*accuracyByK: AccuracyPoint[] = [
    { k: 1, accuracy: 0.70 },
    { k: 3, accuracy: 0.74 },
    { k: 5, accuracy: 0.77 },
    { k: 7, accuracy: 0.78 },
    { k: 9, accuracy: 0.77 },
    { k: 11, accuracy: 0.76 },
    { k: 13, accuracy: 0.74 }
  ];*/

  ngAfterViewInit(): void {
    if (!this.isBrowser) return;

    // Asegura que el canvas exista
    queueMicrotask(() => this.renderAccuracyChart());
  }

  ngOnInit() {
    this.updateKnnResult(this.k);

    this.loadKnnCurve();
  }

  ngOnDestroy(): void {
    if (!this.isBrowser) return;
    this.chart?.destroy();
  }

  incrementK(): void {
    if (this.k < this.MAX_K) this.k++;
  }

  decrementK(): void {
    if (this.k > this.MIN_K) this.k--;
  }

  /** Llama a esto cuando recibas datos de tu API */
  updateAccuracyData(points: AccuracyPoint[]): void {
    this.knnCurve.points = points;
    this.updateChart();
  }

  private renderAccuracyChart(): void {
    const canvas = this.accuracyCanvas?.nativeElement;
    if (!canvas) return;

    // Si ya existe, destruir
    this.chart?.destroy();

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // 🎨 Gradiente violeta (igual que tu UI)
    const violetGradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    violetGradient.addColorStop(0, 'rgba(139, 92, 246, 1)');   // violet-500
    violetGradient.addColorStop(1, 'rgba(139, 92, 246, 0.35)');

    this.chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: this.knnCurve.points.map(p => p.k.toString()),
        datasets: [
          {
            label: 'Accuracy',
            data: this.knnCurve.points.map(p => p.accuracy),
            borderColor: violetGradient,
            backgroundColor: violetGradient,

            borderWidth: 2.5,
            tension: 0.35,

            pointRadius: 4,
            pointHoverRadius: 6,
            pointBackgroundColor: 'rgba(139, 92, 246, 1)',
            pointBorderColor: 'rgba(255,255,255,0.8)',
            pointBorderWidth: 1.5,

            fill: false
          }
        ]
      },
      options: this.getDarkChartOptions('K', 'Accuracy')
    });
  }

  private updateChart(): void {
    if (!this.chart) {
      this.renderAccuracyChart();
      return;
    }

    this.chart.data.labels = this.knnCurve.points.map(p => p.k.toString());
    this.chart.data.datasets[0].data = this.knnCurve.points.map(p => p.accuracy);
    this.chart.update();
  }

  private getDarkChartOptions(xLabel: string, yLabel: string) {
    return {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: true,
          labels: { color: 'rgba(255,255,255,0.75)' }
        },
        tooltip: {
          callbacks: {
            label: (ctx: any) => ` Accuracy: ${Number(ctx.parsed.y).toFixed(3)}`
          }
        }
      },
      scales: {
        x: {
          title: { display: true, text: xLabel, color: 'rgba(255,255,255,0.65)' },
          ticks: { color: 'rgba(255,255,255,0.55)' },
          grid: { color: 'rgba(255,255,255,0.06)' }
        },
        y: {
          title: { display: true, text: yLabel, color: 'rgba(255,255,255,0.65)' },
          ticks: { color: 'rgba(255,255,255,0.55)' },
          grid: { color: 'rgba(255,255,255,0.06)' },
          suggestedMin: 0.67,
          suggestedMax: 0.78
        }
      }
    };
  }



  async updateKnnResult(k: number) {
    this.knnResult = await getKnnResult(k);
  }

  async loadKnnCurve() {
    this.knnCurve = await getKnnCurve();

    this.updateChart();
  }
}
