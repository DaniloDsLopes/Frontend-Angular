import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VitrineComponent } from './vitrine/vitrine.component';
import { LoginComponent } from './login/login.component';
import { DetalheProdutoComponent } from './detalhe-produto/detalhe-produto.component';
import { CestaComprasComponent } from './cesta-compras/cesta-compras.component';
import { PesquisaComponent } from './pesquisa/pesquisa.component';
import { ReenvioSenhaComponent } from './reenvio-senha/reenvio-senha.component';
import { ClienteComponent } from './cliente/cliente.component';


const routes: Routes = [
    {path:'vitrine', component: VitrineComponent},
    {path:'detalhe-produto', component: DetalheProdutoComponent},
    {path:'carrinho-compras', component: CestaComprasComponent},
    {path:'login', component: LoginComponent},
    {path:'pesquisa', component: PesquisaComponent},
    {path:'reenvioSenha', component: ReenvioSenhaComponent},
    {path:'', component: VitrineComponent},
    {path:'clientecadastro', component: ClienteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
