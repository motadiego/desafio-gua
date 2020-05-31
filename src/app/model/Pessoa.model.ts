export class Pessoa {
    constructor(
        public name: string,
        public height: string,
        public mass: number,
        public hairColor: string,
        public skinColor: string,
        public eyeColor: string,
        // tslint:disable-next-line: variable-name
        public birth_year: string,
        public gender: string,
        public homeworld: string,
        public films: string[],
        public species: string,
        public vehicles: string[],
        public starships: string[],
        public created: string,
        public edited: string,
        public url: string,
    ){}

}
