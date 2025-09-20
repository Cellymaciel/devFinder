import { Routes } from '@angular/router';
import { Home } from './component/home/home';
import { Perfil } from './component/perfil/perfil';

export const routes: Routes = [
  {
    path:'',
    component:Home,
    pathMatch:'full'
  },
  {
    path:'home',
    component: Home
  },
  {
    path:'perfil/:username',
    component:Perfil
  }
];
