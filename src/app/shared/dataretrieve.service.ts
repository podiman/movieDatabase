import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { map } from "rxjs/operators";
import { MovieService } from "../movie.service";

@Injectable()
export class DataRetrieve {
  constructor(private http: Http, private movieService: MovieService) {}

  getMovieData() {
    return this.http
      .get("http://www.omdbapi.com/?i=tt3896198&apikey=3ae9bedd")
      .subscribe(
        (movieData: any) => {
          //   this.movieService.setMovieList(movieData);
          // this.oneMovie = Object.assign({}, movieData);
          // this.oneMovie = movieData;
          // console.log(this.movieDataComponent);
        },
        err => console.log(err)
      );
    //   .pipe(
    //     map(response => {
    //       // const array = JSON.parse(response.json()) as any[];
    //       const data = response.json();
    //       // console.log(data);
    //       return data;
    //     })
    //   );
    // catchError(error => {
    //   return throwError("Something went wrong");
    // })
  }

  getMoreMovieData() {
    return this.http
      .get("http://www.omdbapi.com/?s=batman&apikey=3ae9bedd")
      .pipe(
        map(response => {
          const data = response.json();
          return data;
        })
      )
      .subscribe((movies: any[]) => {
        this.movieService.setMovieList(movies);
      });
  }

  //   onGetMovieData() {
  //     this.movieService.getMovieData().subscribe(
  //   (movieData: any) => {
  //     // this.oneMovie = Object.assign({}, movieData);
  //     this.oneMovie = movieData;
  //     // console.log(this.movieDataComponent);
  //   },
  //   err => console.log(err)
  // );
  //     console.log(this.oneMovie);
  //   }

  //   onGetMoreMovieData() {
  //     this.movieService.getMoreMovieData().subscribe(
  //       (movieData: any[]) => {
  //         this.movieDataComponent = movieData;
  //         console.log(this.movieDataComponent);
  //       },
  //       err => console.log(err)
  //     );
  //   }
}
