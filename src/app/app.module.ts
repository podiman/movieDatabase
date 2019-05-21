import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import "hammerjs";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { FilterSearchComponent } from "./filter-search/filter-search.component";
import { MovieContentComponent } from "./movie-content/movie-content.component";
import { DataRetrieve } from "./shared/dataretrieve.service";
import { MovieService } from "./movie.service";
import { MatCardModule } from "@angular/material/card";
import { MatToolbarModule } from "@angular/material";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MovieInfoComponent } from './movie-info/movie-info.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FilterSearchComponent, MovieContentComponent, MovieInfoComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    MatCardModule,
    FlexLayoutModule,
    MatToolbarModule
  ],
  providers: [DataRetrieve, MovieService],
  bootstrap: [AppComponent]
})
export class AppModule {}
