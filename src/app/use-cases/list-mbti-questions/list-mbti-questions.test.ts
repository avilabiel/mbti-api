import IQuestionsMbti from "@/app/contracts/i-questions-mbti";
import Question from "@/entities/mbti-question";
import QuestionsMbtiRepositoryInMemory from "@/externals/database/in-memory/questions-mbti-repository-in-memory";
import ListMbtiQuestions from "./list-mbti-questions";

describe("ListMbtiQuestions", () => {
  let questionsRepository: IQuestionsMbti;

  beforeEach(() => {
    questionsRepository = new QuestionsMbtiRepositoryInMemory();
  });

  it("lists all questions for MBTI survey", async () => {
    const questions = await ListMbtiQuestions.execute({ questionsRepository });

    expect(questions).toHaveLength(10);
    expect(questions[0]).toBeInstanceOf(Question);
  });
});
