import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NotFoundComponent} from "./components/items/not-found/not-found.component";

const routes: Routes = [
  {path:'',redirectTo:'/core/main/home',pathMatch:'full'},
  { path: 'core', loadChildren: () => import('./modules/components/core/core.module').then(m => m.CoreModule) },
  { path: 'security', loadChildren: () => import('./modules/components/security/security.module').then(m => m.SecurityModule) },
  {path:'**',component:NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
