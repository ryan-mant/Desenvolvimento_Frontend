import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CadastroComponent } from "./views/cadastro/cadastro.component";
import { HomeComponent } from "./views/home/home.component";
import { LoginComponent } from "./views/login/login.component";

const routes: Routes =[
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'cadastro', component: CadastroComponent}
]

@NgModule
({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{

}
