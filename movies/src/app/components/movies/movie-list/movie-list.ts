import { Component } from '@angular/core';
import { movie } from '../../../models/movies';
import { genre } from '../../../models/genre';
import { ServMoviesJson } from '../../../services/serv-movies-json';
import { CurrencyPipe, DatePipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-movie-list',
  imports: [UpperCasePipe,DatePipe,CurrencyPipe],
  templateUrl: './movie-list.html',
  styleUrl: './movie-list.css',
})
export class MovieList {
  movies:movie[]=[];
  genres:genre[]=[];

  constructor(private miservicio:ServMoviesJson){
    

  }
  //ngOnInit es una funcion propia de los componentes que se ejecutaca automaticamente cuando se crea el componente
  ngOnInit():void{
    //va a obtener las peliculas a traves del servicio
    this.loadMovie();
    //va a obtener los generos
    this.loadGenres();
    
  }


  loadMovie():void{
    this.miservicio.getMovies().subscribe(
      (data:movie[])=>{
        this.movies=data;
        console.log("Peliculas"+this.movies[0].title);
      }
    );

    }
  loadGenres():void{
    this.miservicio.getGenre().subscribe(
      (data:genre[])=>{
        this.genres=data;
        console.log("Genero"+this.genres[0].name);
      }
    );
    
    }

    getGenreName(genreId:number):string{
      const genre= this.genres.find((g)=> Number(g.id)===Number(genreId)

      );
      return genre ? genre?.name: "sin genero";

    }
    activar(img:HTMLImageElement){
      img.classList.add("activa")

    }
    desactivar(img:HTMLImageElement){
      img.classList.remove("activa")

    }
    comprar(movies:movie){
      alert("comprando pelicula")

    }

  }


