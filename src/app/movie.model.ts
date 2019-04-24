export class Movie {
  public Title: string;
  public Year: string;
  public Rated: string;
  public Released: string;
  public Runtime: string;
  public Genre: string;
  public Director: string;
  public Writer: string;
  public Actors: string;
  public Plot: string;
  public Language: string;
  public Country: string;
  public Awards: string;
  public Poster: string;
  public Ratings: string[];
  public Metascore: number;
  public imdbRating: number;
  public imdbID: string;
  public Type: string;
  public DVD: string;
  public BoxOffice: string;
  public Production: string;
  public Website: string;
  public Response: string;

  constructor(title: string, imdbId: string, poster: string) {
    this.Title = title;
    this.imdbID = imdbId;
    this.Poster = poster;
  }
}
