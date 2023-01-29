import IQuestionsMbti from "@/app/contracts/i-questions-mbti";
import Question from "@/entities/question";
import QuestionsMbtiRepositoryInMemory from "@/externals/database/in-memory/questions-mbti-repository-in-memory";
import listQuestions from "./list-questions";

describe("ListQuestions", () => {
  let questionsRepository: IQuestionsMbti;

  beforeEach(() => {
    questionsRepository = new QuestionsMbtiRepositoryInMemory();
  });

  it("lists all questions for MBTI survey", async () => {
    const questions = await listQuestions.execute({ questionsRepository });

    expect(questions).toHaveLength(10);
    expect(questions[0]).toBeInstanceOf(Question);
  });
});
