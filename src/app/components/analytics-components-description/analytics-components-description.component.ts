import { Component, Input } from '@angular/core';
import { AnalyticsComponentDescription } from '../../interfaces/analyticsComponentDescription';

@Component({
  selector: 'app-analytics-components-description',
  imports: [],
  templateUrl: './analytics-components-description.component.html',
  styleUrl: './analytics-components-description.component.css'
})
export class AnalyticsComponentsDescriptionComponent {

  @Input() item: AnalyticsComponentDescription = {
    title: "",
    description: ""
  }
}
