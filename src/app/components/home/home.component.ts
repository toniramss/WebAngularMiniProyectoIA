import { Component } from '@angular/core';
import { AnalyticsComponentsDescriptionComponent } from '../analytics-components-description/analytics-components-description.component';
import { AnalyticsComponentDescription } from '../../interfaces/analyticsComponentDescription';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink, AnalyticsComponentsDescriptionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  items: AnalyticsComponentDescription[] = [
    {
      id: 1,
      title: 'Fixed acidity',
      description: 'Cantidad de ácidos no volátiles presentes en el vino, responsables de su estructura.',
      unit: 'g/dm³',
      range: '3.8-15.9',
      avg: 7.215,
      relation: 'Débil'
    },
    {
      id: 2,
      title: 'Volatile acidity',
      description: 'Cantidad de ácidos volátiles, principalmente ácido acético, que pueden generar sabores avinagrados.',
      unit: 'g/dm³',
      range: '0.08-1.58',
      avg: 0.344,
      relation: 'Negativa'
    },
    {
      id: 3,
      title: 'Citric acid',
      description: 'Ácido cítrico presente en pequeñas cantidades que aporta frescura al vino.',
      unit: 'g/dm³',
      range: '0-1.66',
      avg: 0.318,
      relation: 'Positiva'
    },
    {
      id: 4,
      title: 'Residual sugar',
      description: 'Azúcar residual que queda tras la fermentación alcohólica.',
      unit: 'g/dm³',
      range: '0.6-65.8',
      avg: 5.048,
      relation: 'Débil'
    },
    {
      id: 5,
      title: 'Chlorides',
      description: 'Cantidad de sales presentes en el vino, que pueden afectar negativamente al sabor.',
      unit: 'g/dm³',
      range: '0.009-0.611',
      avg: 0.0567,
      relation: 'Negativa'
    },
    {
      id: 6,
      title: 'Free sulfur dioxide',
      description: 'Cantidad de dióxido de azufre libre, utilizado para la conservación del vino.',
      unit: 'g/dm³',
      range: '1-289',
      avg: 30.0366,
      relation: 'Débil'
    },
    {
      id: 7,
      title: 'Total sulfur dioxide',
      description: 'Cantidad total de dióxido de azufre presente en el vino.',
      unit: 'mg/dm³',
      range: '6-440',
      avg: 114.109,
      relation: 'Negativa'
    },
    {
      id: 8,
      title: 'Density',
      description: 'Densidad del vino, relacionada con el contenido de alcohol y azúcar.',
      unit: 'g/cm³',
      range: '0.987-1.038',
      avg: 0.994,
      relation: 'Negativa'
    },
    {
      id: 9,
      title: 'pH',
      description: 'Nivel de acidez del vino, que influye en su estabilidad y frescura.',
      unit: '-',
      range: '2.72-4.01',
      avg: 3.224,
      relation: 'Débil'
    },
    {
      id: 10,
      title: 'Sulphates',
      description: 'Sulfatos que contribuyen a la sensación de cuerpo y estructura del vino.',
      unit: 'g/dm³',
      range: '0.22-2',
      avg: 0.533,
      relation: 'Positiva'
    },
    {
      id: 11,
      title: 'Alcohol',
      description: 'Graduación alcohólica del vino.',
      unit: '% vol',
      range: '8-14.9',
      avg: 10.549,
      relation: 'Muy positiva'
    },
    {
      id: 12,
      title: 'Quality',
      description: 'Puntuación sensorial del vino otorgada por catadores.',
      unit: '-',
      range: '3-9',
      avg: 5.795,
      relation: 'Objetivo'
    }
    
  ];
}
