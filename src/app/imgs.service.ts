import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of, pipe } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { ActionlogService } from './actionlog.service';

@Injectable({
  providedIn: 'root'
})
export class ImgsService {
  private url_prefix = "https://github.com/jayson-chao/Miiko-Assets/raw/main/event/";
  url: string = "";
  status: any = 400;

  constructor(
    private http: HttpClient,
    private actionlog: ActionlogService
  ) { }

  getImage(image_id: string): Observable<string> {
    this.actionlog.add(`ImgsService: Checking Image id=${image_id}`);
    return this.http.head(`https://github.com/jayson-chao/Miiko-Assets/raw/main/event/${image_id}.png`, {responseType: 'text'})
  }
}
