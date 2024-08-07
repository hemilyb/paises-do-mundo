interface InfoCountry {
  name: {
    common: string;
  }
  borders: string[];
  cca3: string;
  capital: string;
  continents: string;
  population: number;
  region: string;
  languages: { [key: string]: string }
  translations: {
    por: {
      common: string;
    }
  }
  flags: {
    png: string;
    svg: string;
  }
}