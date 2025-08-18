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
            name: item.name.common ?? 'No Spanish Name',
            population: item.population,
            capital: item.capital.join(','),
            language: Object.values(item.languages)[0] ?? 'No language specified',
            officialName: item.name.official,
            borders: item.borders ?? [],
            coatOfArms: item.coatOfArms.svg ?? '',
            translations: Object.values(item.translations).map(t => `${t.common} (${t.official})`),
        };
    }


    //Se mapea el arreglo de paises del API y crea un arreglo de tipo Country
    static mapRESTCountryArrayToCountryArray(items: RESTCountry[]): Country[]{
        return items.map(CountryMapper.mapRESTCountryToCountry);
    }
}