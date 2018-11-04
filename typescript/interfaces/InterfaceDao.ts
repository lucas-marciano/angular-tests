export default interface InterfaceDao<T>{
    table_name: string

    insert(object: T): boolean
    delete(id: number): T
    update(object: any): boolean
    getById(id: number): T
    getAll(): Array<T>
}