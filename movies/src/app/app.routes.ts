import { Routes } from '@angular/router';
import { MovieList } from './components/movies/movie-list/movie-list';
import { MovieCrud } from './components/movies/movie-crud/movie-crud';
import { MovieView } from './components/movies/movie-view/movie-view';

export const routes: Routes = [
    //rutas de todos los componentes que queremos enlazar
    {path:"movie-list", component:MovieList},
    {path:"movie-crud", component:MovieCrud},
    {path:"movie-view", component:MovieView},
    {path:"movie-view/:id", component:MovieView},
    {path:"movie-view/:id/:otro", component:MovieView},
   
   
    // inidicar sino hay ruta usar una por defecto
    {path:"", redirectTo:"movie-list", pathMatch:`full`},
    //indicar si es una ruta no existente 
    {path:"*", redirectTo:"movie-list", pathMatch:`full`}
    



];
