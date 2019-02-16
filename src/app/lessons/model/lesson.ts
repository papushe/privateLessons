export class Lesson {
  name: string;
  data: Data[];
  amount?: number = 0;
}

export class Data {
  date: string;
  time: number;
}
