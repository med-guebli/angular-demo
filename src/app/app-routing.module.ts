import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutoAffiliationComponent } from './features/auto-affiliation/auto-affiliation/auto-affiliation.component';

const routes: Routes = [
  {
    path: "auto-affiliation",
    component: AutoAffiliationComponent
  },
  {
    path: '**',
    component: AutoAffiliationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
