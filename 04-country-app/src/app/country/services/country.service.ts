import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { RESTCountry } from '../interfaces/rest-countries.interface';
import { map, Observable, catchError, throwError, delay, of, tap } from 'rxjs';
import { Country } from '../interfaces/country.interface';
import { CountryMapper } from '../mapper/country.mapper';

const API_URL = 'https://restcountries.com/v3.1'

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private http = inject(HttpClient);
  private queryCacheCapital = new Map<string, Country[]>();
  private queryCacheCountry = new Map<string, Country[]>();
  private queryCacheRegion = new Map<string, Country[]>();



  searchByCapital(query: string): Observable<Country[]>{
    query = query.toLowerCase();

    if (this.queryCacheCapital.has(query)){
      return of(this.queryCacheCapital.get(query)!);
    }

    return this.http.get<RESTCountry[]>(`${API_URL}/capital/${query}`)
      .pipe(
        map( CountryMapper.mapRESTCountryArrayToCountryArray),
        tap( countries => this.queryCacheCapital.set(query, countries)),
        delay(1000),
        catchError(error => {
          console.log('Error fetching ', error);

          return throwError(() => new Error (`No se pudo obtener ningun resultado que contenga ${query}`))
        })
      );
  }


  searchByCountry(query: string): Observable<Country[]>{
    query = query.toLowerCase();

    if (this.queryCacheCountry.has(query)){
      return of(this.queryCacheCountry.get(query)!);
    }


    return this.http.get<RESTCountry[]>(`${API_URL}/name/${query}`)
      .pipe(
        map(CountryMapper.mapRESTCountryArrayToCountryArray),
        tap( countries => this.queryCacheCountry.set(query, countries)),
        delay(1000),
        catchError(error => {
          console.log('Error fetching ', error);

          return throwError (() => new Error (`No se pudo obtener ningun pais que contenga ${query}`))
        })
      )
  }


  searchCountryByAlphaCode(code: string){

    return this.http.get<RESTCountry[]>(`${API_URL}/alpha/${code}`)
      .pipe(
        map(CountryMapper.mapRESTCountryArrayToCountryArray),
        map( countries => countries.at(0)),
        delay(1000),
        catchError(error => {
          console.log('Error fetching ', error);

          return throwError (() => new Error (`No se pudo obtener ningun pais conel codigo ${code}`))
        })
      )
  }

  // * TODO: SearchCountriesByRegion


  searchCountriesByRegion(regionQuery: string){
    regionQuery = regionQuery.toLowerCase();

    if (this.queryCacheRegion.has(regionQuery)){
      return of(this.queryCacheCountry.get(regionQuery)!);
    }

    console.log('API')

    return this.http.get<RESTCountry[]>(`${API_URL}/region/${regionQuery}`)
    .pipe(
      map(CountryMapper.mapRESTCountryArrayToCountryArray),
      tap( countries => this.queryCacheRegion.set(regionQuery, countries)),
      delay(1000),
      catchError(error => {
        console.log('Error fetching ', error);
        
        return throwError (() => new Error (`No se obtuvo ningun pais en la región ${regionQuery}`))
      })
    )
  }



}
