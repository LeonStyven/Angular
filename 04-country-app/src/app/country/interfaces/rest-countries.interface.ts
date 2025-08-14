export interface RESTCountry {
  name: CountryName;
  tld: string[];
  cca2: string;
  ccn3: string;
  cioc: string;
  independent: boolean;
  status: string;
  unMember: boolean;
  currencies: { [key: string]: Currency };
  idd: Idd;
  capital: string[];
  altSpellings: string[];
  region: string;
  subregion: string;
  languages: { [key: string]: string };
  latlng: number[];
  landlocked: boolean;
  borders?: string[];
  area: number;
  demonyms: { [key: string]: Demonym };
  cca3: string;
  translations: { [key: string]: Translation };
  flag: string;
  maps: Maps;
  population: number;
  gini?: { [key: string]: number };
  fifa: string;
  car: Car;
  timezones: string[];
  continents: string[];
  flags: Flags;
  coatOfArms: CoatOfArms;
  startOfWeek: string;
  capitalInfo: CapitalInfo;
  postalCode: PostalCode;
}

export interface CountryName {
  common: string;
  official: string;
  nativeName: { [key: string]: NativeName };
}

export interface NativeName {
  official: string;
  common: string;
}

export interface Currency {
  symbol: string;
  name: string;
}

export interface Idd {
  root: string;
  suffixes: string[];
}

export interface Demonym {
  f: string;
  m: string;
}

export interface Translation {
  official: string;
  common: string;
}

export interface Maps {
  googleMaps: string;
  openStreetMaps: string;
}

export interface Car {
  signs: string[];
  side: string;
}

export interface Flags {
  png: string;
  svg: string;
  alt?: string;
}

export interface CoatOfArms {
  png?: string;
  svg?: string;
}

export interface CapitalInfo {
  latlng: number[];
}

export interface PostalCode {
  format: string | null;
  regex: string | null;
}