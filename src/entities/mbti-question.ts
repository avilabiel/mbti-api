export default class MbtiQuestion {
  id?: number;
  question: string;
  dimension: string;
  meaning: string;
  createdAt?: Date;

  constructor(props: MbtiQuestion) {
    this.id = props.id;
    this.question = props.question;
    this.dimension = props.dimension;
    this.meaning = props.meaning;
    this.createdAt = props.createdAt;
  }
}
