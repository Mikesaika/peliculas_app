import { Component } from '@angular/core';
import { movie } from '../../../models/movies';
import { ServMoviesJson } from '../../../services/serv-movies-json';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-view',
  imports: [],
  templateUrl: './movie-view.html',
  styleUrl: './movie-view.css',
})
export class MovieView {
  movie!:movie; //pelicula que va vamos a mostrar
  constructor(private miservicio:ServMoviesJson, private route:ActivatedRoute){
  
  }
  ngOnInit(){
    //obtener a traves de la ruta
    const id= this.route.snapshot.paramMap.get("id");
    this.miservicio.getMovieById(Number(id)).subscribe(
      (dato:movie)=>{
        this.movie=dato;//actualizar la pelicula con el dato que viene de mi servicio
      }


    );

  }

}
