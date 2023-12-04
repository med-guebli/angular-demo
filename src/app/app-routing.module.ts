import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutoAffiliationComponent } from './features/auto-affiliation/auto-affiliation/auto-affiliation.component';
import { StoreComponent } from './features/store/components/store/store.component';

const routes: Routes = [
  {
    path: "auto-affiliation",
    component: AutoAffiliationComponent
  },
  {
    path: "store",
    component: StoreComponent
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
