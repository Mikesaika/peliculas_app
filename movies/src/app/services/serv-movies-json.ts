import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { movie } from '../models/movies';
import { genre } from '../models/genre';


@Injectable({
  providedIn: 'root',
})
export class ServMoviesJson {
  private movieUrl ="http://localhost:3000/movies";
  private genreUrl ="http://localhost:3000/genres";

  constructor(private http:HttpClient){

  }
  //obtener todas las peliculas
  getMovies():Observable<movie[]>{
    return this.http.get<movie[]>(this.movieUrl);

  }
  //obtener todos los generos
   getGenre():Observable<genre[]>{
    return this.http.get<genre[]>(this.genreUrl);

  } 

  //obtenenr las peliculas activas
    getMovieActives():Observable<movie[]>{
      return this.http.get<movie[]>(this.movieUrl)
      .pipe(map(
        (movies)=> movies.filter(m=> m.active==true)

      ));

    }
    //obtener pelicula por id
    getMovieById(id:number):Observable<movie>{
      return this.http.get<movie>(`${this.movieUrl}/${id}`);
      //interpolacion de variables
    }
    addMovie(movie:movie):Observable<movie>{
      //peticion post para agregar nuevos datos
      return this.http.post<movie>(this.movieUrl,movie);

    }
    updateMovie(movie:movie):Observable<movie>{
//peticion put es para modificar datos existen dos metodos para editar 
// patch para editar uno que otro campo
//put para editar todo
      const urlMovieEditar= `${this.movieUrl}/${movie.id}`
      return this.http.put<movie>(urlMovieEditar,movie);
    }
    deleteMovie(id:number):Observable<void>{
      const urlMovieEditar= `${this.movieUrl}/${id}`
      return this.http.delete<void>(urlMovieEditar);
    }
    //busqueda por titulo
    searchMovies(title:string):Observable<movie[]>{
      return this.http.get<movie[]>(this.movieUrl)
      .pipe(map(
        (movies)=> movies.filter(m=> m.title.toLocaleLowerCase().includes(title.toLocaleLowerCase()))

      ));

    }





  


  

}
