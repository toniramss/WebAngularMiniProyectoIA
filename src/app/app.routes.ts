import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { KnnComponent } from './components/modelos/knn/knn.component';
import { KmeansComponent } from './components/modelos/kmeans/kmeans.component';
import { DecisionTreeComponent } from './components/modelos/decision-tree/decision-tree.component';
import { RandomForestComponent } from './components/modelos/random-forest/random-forest.component';
import { CousinsComponent } from './components/modelos/cousins/cousins.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'knn', component: KnnComponent },
    { path: 'cousine', component: CousinsComponent },
    { path: 'kmeans', component: KmeansComponent },
    { path: 'decision-tree', component: DecisionTreeComponent },
    { path: 'random-forest', component: RandomForestComponent },
];
