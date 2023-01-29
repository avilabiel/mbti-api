import MbtiQuestion from "@/entities/mbti-question";

export default interface IQuestionsMbti {
  list(): Promise<MbtiQuestion[]>;

  getById(questionId: string): Promise<MbtiQuestion | null>;
}
