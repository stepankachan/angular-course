export class AppLesson {
  name: string;
  number: number;
  description: string;
  pdfSource: string;

  constructor(number: number, name: string, description: string, pdfSource: string) {
    this.name = name;
    this.description = description;
    this.pdfSource = pdfSource;
  }
}
