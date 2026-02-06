export default interface IBookDAO{
    insert(title: string, author: string): void;
    update(id: number, title: string, author: string): void;
    delete(id: number): void;
}