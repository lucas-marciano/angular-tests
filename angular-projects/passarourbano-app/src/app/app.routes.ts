import { Routes } from '@angular/router';
import { PanelComponent } from './panel/panel.component';
import { FunComponent } from './fun/fun.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { OffertComponent } from './offert/offert.component';

export const ROUTES: Routes = [
    {path: '', component: PanelComponent},
    {path: 'fun', component: FunComponent},
    {path: 'restaurant', component: RestaurantComponent},
    {path: 'offert', component: PanelComponent},
    {path: 'offert/:id', component: OffertComponent}
]