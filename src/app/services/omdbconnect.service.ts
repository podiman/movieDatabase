import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { map } from "rxjs/operators";
import { MovieService } from "../movie.service";

@Injectable({
  providedIn: "root"
})
export class OmdbconnectService {
  constructor(private http: Http, private movieService: MovieService) {}

  getTestBatmanMovieData() {
    return this.http.get("http://www.omdbapi.com/?s=batman&apikey=3ae9bedd").pipe(
      map(response => {
        const data = response.json();
        return data;
      })
    );
    // .subscribe((movies: any[]) => {
    //   this.movieService.setMovieList(movies);
    // });
  }
}
