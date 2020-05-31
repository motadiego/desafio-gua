export class Filme {
  constructor(
      public title: string,
      // tslint:disable-next-line: variable-name
      public episode_id: string,
      // tslint:disable-next-line: variable-name
      public opening_crawl: string,
      public director: string,
      public producer: string,
      // tslint:disable-next-line: variable-name
      public release_date: string,
      // tslint:disable-next-line: variable-name
      public characters: string[],
      public planets: string[],
      public starships: string[],
      public vehicles: string[],
      public species: string[],
      public created: string,
      public edited: string,
      public url: string,
  ){}

}
