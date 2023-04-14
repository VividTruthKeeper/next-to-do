import { IRandomColor } from "@/typings/randomColor.type";

export class RandomColor implements IRandomColor {
  readonly letters = "0123456789ABCDEF";
  color = "#";

  getColor(): string {
    for (var i = 0; i < 6; i++) {
      this.color += this.letters[Math.floor(Math.random() * 16)];
    }

    return this.color;
  }
}
