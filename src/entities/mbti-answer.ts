import MbtiQuestion from "./mbti-question";

export default class MbtiAnswer {
  id?: number;
  question: MbtiQuestion;
  answer: number;
  createdAt?: Date;

  constructor(props: MbtiAnswer) {
    this.id = props.id;
    this.question = props.question;
    this.answer = props.answer;
    this.createdAt = props.createdAt;
  }
}
