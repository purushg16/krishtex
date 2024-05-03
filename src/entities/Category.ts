export default interface Category {
  name: string;
  parent: boolean;
  children: Category[];
}
