import InterfaceDao from "./InterfaceDao";

export default class Dao<T> implements InterfaceDao<T>{
    table_name: string = ''   
    
    insert(object: T): boolean {
        throw new Error("Method not implemented.");
    }
    delete(id: number): T {
        throw new Error("Method not implemented.");
    }
    update(object: any): boolean {
        throw new Error("Method not implemented.");
    }
    getById(id: number): T {
        throw new Error("Method not implemented.");
    }
    getAll(): T[] {
        throw new Error("Method not implemented.");
    }
}