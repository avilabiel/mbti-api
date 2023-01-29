export default class MbtiQuestion {
  id?: string;
  question: string;
  dimension: string;
  meaning: string;
  direction: number;
  createdAt?: Date;

  constructor(props: MbtiQuestion) {
    this.id = props.id;
    this.question = props.question;
    this.dimension = props.dimension;
    this.meaning = props.meaning;
    this.direction = props.direction;
    this.createdAt = props.createdAt;
  }
}
