export interface IRandomColor {
  readonly letters: "0123456789ABCDEF";
  color: string;

  getColor(): string;
}
