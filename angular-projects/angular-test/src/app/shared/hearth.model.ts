export class Hearth{
    
    constructor(
        public fullHearth: boolean,
        public emptyImage = '/assets/coracao_vazio.png',
        public fullImage = '/assets/coracao_cheio.png'
    ){}

    public showHearth(): string{
        return this.fullHearth ? this.fullImage : this.emptyImage
    }
}