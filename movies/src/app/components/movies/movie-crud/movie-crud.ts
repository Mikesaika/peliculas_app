import { Component } from '@angular/core';
import { movie } from '../../../models/movies';
import { ServMoviesJson } from '../../../services/serv-movies-json';
import { genre } from '../../../models/genre';
import { Router } from '@angular/router';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog';
import { TableReutilizable } from '../table-reutilizable/table-reutilizable'; // ✅
import { NgIf } from '@angular/common';                                      // ✅

@Component({
  selector: 'app-movie-crud',
  standalone: true,
  imports: [MatDialogModule,
    NgIf,
    TableReutilizable
  ],
  templateUrl: './movie-crud.html',
  styleUrl: './movie-crud.css',
})
export class MovieCrud {
  movies: movie[] = [];
  genres: genre[] = [];
  selectedMovies: movie[] = [];
  showTable: boolean = false;

  //se agrega en el contructor el inyecto matdialog
  constructor(
    private miServicio: ServMoviesJson,
    private router: Router,
    private dialog: MatDialog
  ) {
    this.loadMovie();
    this.loadGenres();
  }

  loadMovie(): void {
    this.miServicio.getMovies().subscribe((data: movie[]) => {
      this.movies = data;
    });
  }

  loadGenres(): void {
    this.miServicio.getGenre().subscribe((data: genre[]) => {
      this.genres = data;
    });
  }

  getGenreName(genreId: number): string {
    const genre = this.genres.find((g) => Number(g.id) === Number(genreId));
    return genre ? genre?.name : "sin genero";
  }

  edit(movies: movie) {

  }

  delete(movieSeleccionada: movie) {
    // se abre el diálogo en lugar del confirm() del navegador
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '350px',
      data: {
        title: 'Eliminar Película',
        message: `¿Estás seguro de que deseas eliminar "${movieSeleccionada.title}"?`
      }
    });
    // se confirma para luego borrar
    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.miServicio.deleteMovie(movieSeleccionada.id!).subscribe(() => {
          // una alerta de que fue borrada la pelicula
          alert("Eliminado exitosamente");
          this.loadMovie();
        });
      }
    });
  }

  search(busq: HTMLInputElement) {
    let parametro = busq.value.toLowerCase();
    this.miServicio.searchMovies(parametro).subscribe((datos: movie[]) => {
      this.movies = datos;
    });
  }

  view(id: number | undefined) {
    this.router.navigate([`/movie-view`, id]);
  }
  showTableFor(movieId: number | undefined) {
    if (movieId == null) {
      this.showTable = false;
      this.selectedMovies = [];
      return;
    }

    // Filtrar solo la película seleccionada
    this.selectedMovies = this.movies.filter(m => m.id === movieId);

    // mostrar la tabla solo si encontramos algo
    this.showTable = this.selectedMovies.length > 0;
  }
  closeTable() {
  this.showTable = false;
  this.selectedMovies = [];
}
}
