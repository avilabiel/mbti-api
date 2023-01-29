import MbtiQuestion from "./mbti-question";

export default class MbtiAnswer {
  id?: string;
  question: MbtiQuestion;
  response: number;
  createdAt?: Date;

  constructor(props: MbtiAnswer) {
    this.id = props.id;
    this.question = props.question;
    this.response = props.response;
    this.createdAt = props.createdAt;
  }
}
