import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from '../models/hero';

@Injectable({
  providedIn: 'root',
})
export class HeroService {

  private headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Hero[]> {
    return this.http.get<Hero[]>("http://localhost:8080/api/heroes");
  }

  public getAllPageable(page: string, size: string): Observable<any> {
    const params = new HttpParams()
      .set('page', page)
      .set('size', size);
    return this.http.get<any>("http://localhost:8080/api/heroes", { params: params });
  }

  public getHeroById(id: number): Observable<Hero> {
    return this.http.get<Hero>("http://localhost:8080/api/heroes/" + id);
  }

  public createHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>("http://localhost:8080/api/heroes/create", hero, { headers: this.headers });
  }

  public editHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>("http://localhost:8080/heroes/api/create/update/" + hero.id, hero,
      { headers: this.headers });
  }

  public deleteHero(id: number): Observable<void> {
    return this.http.delete<void>("http://localhost:8080/heroes/api/create/delete/" + id);
  }

}
