import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from '../app/signin/signin.component';
import { LobbyComponent } from './lobby/lobby.component';
const routes: Routes = [
  { path: 'lobby', component: LobbyComponent },
  { path: 'signin', component: SigninComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
