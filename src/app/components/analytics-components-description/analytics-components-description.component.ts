import { Component, Input } from '@angular/core';
import { AnalyticsComponentDescription } from '../../interfaces/analyticsComponentDescription';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-analytics-components-description',
  imports: [CommonModule],
  templateUrl: './analytics-components-description.component.html',
  styleUrl: './analytics-components-description.component.css'
})
export class AnalyticsComponentsDescriptionComponent {

  @Input() item: AnalyticsComponentDescription = {
    id: 0,
    title: "",
    description: "",
    unit: "",
    range: "",
    avg: 0,
    relation: "Débil"
  }
}
