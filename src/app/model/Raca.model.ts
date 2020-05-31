export class Raca {
    constructor(
        public name: string,
        public classification: string,
        public designation: number,
        // tslint:disable-next-line: variable-name
        public average_height: string,
        // tslint:disable-next-line: variable-name
        public skin_colors: string,
        // tslint:disable-next-line: variable-name
        public hair_colors: string,
        // tslint:disable-next-line: variable-name
        public eye_colors: string,
        // tslint:disable-next-line: variable-name
        public average_lifespan: string,
        public homeworld: string,
        public language: string,
        public peolple: string[],
        public films: string[],
        public created: string,
        public edited: string,
        public url: string,
    ){}

}
