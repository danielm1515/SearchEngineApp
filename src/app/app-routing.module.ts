import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from '../app/signin/signin.component';
import { LobbyComponent } from './lobby/lobby.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { AuthGuard } from './guards/auth.guard';
const routes: Routes = [
  { path: 'lobby', component: LobbyComponent , canActivate: [AuthGuard]},
  { path: 'signin', component: SigninComponent },
  { path: 'favorites', component: FavoritesComponent , canActivate: [AuthGuard]},
  { path: '**', redirectTo: 'lobby' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
