import IQuestionsMbti from "@/app/contracts/i-questions-mbti";
import IUseCase from "@/app/contracts/i-use-case";
import Question from "@/entities/question";

class ListQuestions implements IUseCase {
  async execute({
    questionsRepository,
  }: {
    questionsRepository: IQuestionsMbti;
  }): Promise<Question[]> {
    return await questionsRepository.list();
  }
}

export default new ListQuestions();
