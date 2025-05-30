export interface IRepository<T> {
  findById(id: string): Promise<T | null>;
  findAll(): Promise<T[]>;
  create(data: T): Promise<T>;
  update(id: string, data: T): Promise<T>;
  delete(id: string): Promise<void>;
}
