import type { Country } from "../interfaces/country.interface";
import type { RESTCountry } from "../interfaces/rest-countries.interface";



export class CountryMapper {
    /* 
        //TODO: Statis RestCountry => Country 
        //TODO: static RestCountry[] => Country[] 
    */

    //Transforma un elemento del API a tipo Country
    static mapRESTCountryToCountry(item: RESTCountry): Country{
        return {
            cca2: item.cca2,
            flag: item.flag,
            flagsvg: item.flags.svg,
            name: item.translations['spa'].common ?? 'No Spanish Name',
            population: item.population,
            capital: item.capital.join(',')
        };
    }


    //Se mapea el arreglo de paises del API y crea un arreglo de tipo Country
    static mapRESTCountryArrayToCountryArray(items: RESTCountry[]): Country[]{
        return items.map(CountryMapper.mapRESTCountryToCountry);
    }
}