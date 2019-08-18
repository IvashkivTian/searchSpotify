import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { TopResultsComponent} from './top-results/top-results.component';
import { SongsComponent} from './songs/songs.component';
import { AlbumsComponent} from './albums/albums.component';

const routes: Routes = [
  { path: 'artists', component: TopResultsComponent },
  { path: 'songs', component: SongsComponent },
  { path: 'albums', component: AlbumsComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
