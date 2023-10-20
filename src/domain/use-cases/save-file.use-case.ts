import fs from 'fs';
export interface SaveFileUseCase {
    execute: ( options: SaveFileOption ) => boolean;
}

export interface SaveFileOption {
    destination : string;
    fileContent : string;
    fileName    : string;
}


export class SaveFile implements SaveFileUseCase {

    execute ({ 
        fileContent, 
        destination, 
        fileName
    }: SaveFileOption): boolean {
        try {
            fs.mkdirSync( destination, { recursive: true });
            fs.writeFileSync(`${ destination }/${ fileName }.txt`, fileContent );
            console.log('¡Archivo creado exitosamente!');
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

}