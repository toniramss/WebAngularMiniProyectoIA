import { Component } from '@angular/core';
import { AnalyticsComponentsDescriptionComponent } from '../analytics-components-description/analytics-components-description.component';
import { AnalyticsComponentDescription } from '../../interfaces/analyticsComponentDescription';

@Component({
  selector: 'app-home',
  imports: [AnalyticsComponentsDescriptionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  items: AnalyticsComponentDescription[] = [
    {
      title: 'Característica 1',
      description: 'Descripción de la característica 1'
    },
    {
      title: 'Característica 2',
      description: 'Descripción de la característica 2'
    }
  ];
}
