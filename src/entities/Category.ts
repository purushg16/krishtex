export default interface Category {
  _id?: string;
  name: string;
  parent: boolean;
  children: Category[];
}
