import { CreateTable } from "../domain/use-cases/create-table.use-case";
import { SaveFile } from "../domain/use-cases/save-file.use-case";

interface RunOptions {
    base: number;
    limit: number;
    showTable: boolean;
    destination: string;
    name: string;
}

export class ServerApp {

    static run( { base, limit, showTable, destination, name }: RunOptions ) {
        console.log('Server running...');
        
        const table = new CreateTable().execute({ base, limit });
        const wasCreated = new SaveFile().execute({ 
            fileContent: table, 
            fileName: name,
            destination
        });
        
        if( showTable ) console.log( table );
        
    }

}