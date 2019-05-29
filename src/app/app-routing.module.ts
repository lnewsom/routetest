import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoreComponent } from './core/core.component';
import { FeatureComponent } from './feature/feature.component';

const routes: Routes = [
  {path: 'core/:coreId', component: CoreComponent,
  children: [
    { path: 'feature' , component: FeatureComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
