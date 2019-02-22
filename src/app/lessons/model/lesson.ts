export class Lesson {
  name: string;
  data: Data[];
  amount?: number = 0;
  expand?: boolean;
}

export class Data {
  date: string;
  time: number;
}
