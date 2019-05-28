import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  constructor(private http: HttpClient) { }

  public getHeader(): Observable<string> {
    const url = 'url';
    return this.http.get<{access_token: string}>(url)
    .pipe(
      map((response) => response.access_token)
    );
  }
}
