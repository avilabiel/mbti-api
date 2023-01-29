import Question from "@/entities/question";

export default interface IQuestionsMbti {
  list(): Promise<Question[]>;
}
