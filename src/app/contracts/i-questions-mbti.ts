import Question from "@/entities/mbti-question";

export default interface IQuestionsMbti {
  list(): Promise<Question[]>;
}
