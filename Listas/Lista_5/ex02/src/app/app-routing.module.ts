import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdicionarAnimalComponent } from './components/views/animal/adicionar-animal/adicionar-animal.component';
import { HomeComponent } from './components/views/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'adicionar-animal', component: AdicionarAnimalComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
