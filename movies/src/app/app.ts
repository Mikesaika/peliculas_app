import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { MovieList } from './components/movies/movie-list/movie-list';
import { MovieCrud } from "./components/movies/movie-crud/movie-crud";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MovieList, MovieCrud, MovieCrud, RouterLink, RouterLinkActive, RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('movies_app');
}
