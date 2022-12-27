import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './modules/home/pages/home-page/home-page.component';


const routes: Routes = [ //TODO: router-outlet (Padre)
  {
    path: 'auth', //TODO (Public) Login, Register, Forgot...
    loadChildren: () => import(`./modules/auth/auth.module`).then(m => m.AuthModule)
  },
  {
    path: '',//TODO (Private) 🔴🔴
    component: HomePageComponent,
    loadChildren: () => import(`./modules/home/home.module`).then(m => m.HomeModule),
    // canActivate: [SessionGuard]
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
