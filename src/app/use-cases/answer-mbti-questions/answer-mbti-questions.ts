import IUseCase from "@/app/contracts/i-use-case";
import MbtiAnswer from "@/entities/mbti-answer";
import MbtiReport from "@/entities/mbti-report";

class AnswerMbtiQuestions implements IUseCase {
  async execute({ answers }: { answers: MbtiAnswer[] }): Promise<MbtiReport> {
    return new MbtiReport({ result: "ENTP" });
  }
}

export default new AnswerMbtiQuestions();
