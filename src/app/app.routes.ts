import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './layout/header/header.component';
import { MenuComponent } from './menu/menu.component';
import { CustomizePizzaComponent } from './customize-pizza/customize-pizza.component';

export const routes: Routes = [{
    path: '', component: HomeComponent,
},
{path: 'menu', component: MenuComponent
},
    { path: '', redirectTo: '/home', pathMatch: 'full' 

    },
{
    path: 'customize-pizza', component: CustomizePizzaComponent
}];
