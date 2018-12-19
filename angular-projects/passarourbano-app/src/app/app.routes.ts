import { Routes } from '@angular/router';
import { PanelComponent } from './panel/panel.component';
import { FunComponent } from './fun/fun.component';
import { RestaurantComponent } from './restaurant/restaurant.component';

export const ROUTES: Routes = [
    {path: '', component: PanelComponent},
    {path: 'fun', component: FunComponent},
    {path: 'restaurant', component: RestaurantComponent}
]