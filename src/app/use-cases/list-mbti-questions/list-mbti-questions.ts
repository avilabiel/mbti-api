import IQuestionsMbti from "@/app/contracts/i-questions-mbti";
import IUseCase from "@/app/contracts/i-use-case";
import MbtiQuestion from "@/entities/mbti-question";

class ListMbtiQuestions implements IUseCase {
  async execute({
    questionsRepository,
  }: {
    questionsRepository: IQuestionsMbti;
  }): Promise<MbtiQuestion[]> {
    return await questionsRepository.list();
  }
}

export default new ListMbtiQuestions();
