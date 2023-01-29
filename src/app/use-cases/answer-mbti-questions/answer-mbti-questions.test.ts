import IQuestionsMbti from "@/app/contracts/i-questions-mbti";
import MbtiAnswer from "@/entities/mbti-answer";
import MbtiReport from "@/entities/mbti-report";
import QuestionsMbtiRepositoryInMemory from "@/externals/database/in-memory/questions-mbti-repository-in-memory";
import ListMbtiQuestions from "../list-mbti-questions";
import AnswerMbtiQuestions from "./answer-mbti-questions";

describe("AnswerMbtiQuestions", () => {
  let questionsRepository: IQuestionsMbti;

  beforeEach(() => {
    questionsRepository = new QuestionsMbtiRepositoryInMemory();
  });

  it("returns ENTP", async () => {
    const questions = await ListMbtiQuestions.execute({ questionsRepository });

    const answers: MbtiAnswer[] = [
      {
        question: questions[0],
        response: 4,
      },
      {
        question: questions[1],
        response: 3,
      },
      {
        question: questions[2],
        response: 1,
      },
      {
        question: questions[3],
        response: 6,
      },
      {
        question: questions[4],
        response: 7,
      },
      {
        question: questions[5],
        response: 3,
      },
      {
        question: questions[6],
        response: 5,
      },
      {
        question: questions[7],
        response: 3,
      },
      {
        question: questions[8],
        response: 6,
      },
      {
        question: questions[9],
        response: 6,
      },
    ];

    const report = await AnswerMbtiQuestions.execute({ answers });

    expect(report.result).toEqual("ENTP");
    expect(report).toBeInstanceOf(MbtiReport);
  });

  it("returns ESTJ", async () => {
    const questions = await ListMbtiQuestions.execute({ questionsRepository });

    const answers: MbtiAnswer[] = [
      {
        question: questions[0],
        response: 1,
      },
      {
        question: questions[1],
        response: 5,
      },
      {
        question: questions[2],
        response: 4,
      },
      {
        question: questions[3],
        response: 6,
      },
      {
        question: questions[4],
        response: 5,
      },
      {
        question: questions[5],
        response: 2,
      },
      {
        question: questions[6],
        response: 6,
      },
      {
        question: questions[7],
        response: 3,
      },
      {
        question: questions[8],
        response: 3,
      },
      {
        question: questions[9],
        response: 2,
      },
    ];

    const report = await AnswerMbtiQuestions.execute({ answers });

    expect(report.result).toEqual("ESTJ");
    expect(report).toBeInstanceOf(MbtiReport);
  });

  it("returns INFP", async () => {
    const questions = await ListMbtiQuestions.execute({ questionsRepository });

    const answers: MbtiAnswer[] = [
      {
        question: questions[0],
        response: 3,
      },
      {
        question: questions[1],
        response: 2,
      },
      {
        question: questions[2],
        response: 6,
      },
      {
        question: questions[3],
        response: 1,
      },
      {
        question: questions[4],
        response: 7,
      },
      {
        question: questions[5],
        response: 3,
      },
      {
        question: questions[6],
        response: 2,
      },
      {
        question: questions[7],
        response: 5,
      },
      {
        question: questions[8],
        response: 2,
      },
      {
        question: questions[9],
        response: 7,
      },
    ];

    const report = await AnswerMbtiQuestions.execute({ answers });

    expect(report.result).toEqual("INFP");
    expect(report).toBeInstanceOf(MbtiReport);
  });

  it("returns ISFP", async () => {
    const questions = await ListMbtiQuestions.execute({ questionsRepository });

    const answers: MbtiAnswer[] = [
      {
        question: questions[0],
        response: 3,
      },
      {
        question: questions[1],
        response: 4,
      },
      {
        question: questions[2],
        response: 7,
      },
      {
        question: questions[3],
        response: 1,
      },
      {
        question: questions[4],
        response: 2,
      },
      {
        question: questions[5],
        response: 5,
      },
      {
        question: questions[6],
        response: 4,
      },
      {
        question: questions[7],
        response: 3,
      },
      {
        question: questions[8],
        response: 2,
      },
      {
        question: questions[9],
        response: 6,
      },
    ];

    const report = await AnswerMbtiQuestions.execute({ answers });

    expect(report.result).toEqual("ISFP");
    expect(report).toBeInstanceOf(MbtiReport);
  });

  it("returns ESTJ", async () => {
    const questions = await ListMbtiQuestions.execute({ questionsRepository });

    const answers: MbtiAnswer[] = [
      {
        question: questions[0],
        response: 4,
      },
      {
        question: questions[1],
        response: 4,
      },
      {
        question: questions[2],
        response: 4,
      },
      {
        question: questions[3],
        response: 4,
      },
      {
        question: questions[4],
        response: 4,
      },
      {
        question: questions[5],
        response: 4,
      },
      {
        question: questions[6],
        response: 4,
      },
      {
        question: questions[7],
        response: 4,
      },
      {
        question: questions[8],
        response: 4,
      },
      {
        question: questions[9],
        response: 4,
      },
    ];

    const report = await AnswerMbtiQuestions.execute({ answers });

    expect(report.result).toEqual("ESTJ");
    expect(report).toBeInstanceOf(MbtiReport);
  });

  it("returns ISTJ", async () => {
    const questions = await ListMbtiQuestions.execute({ questionsRepository });

    const answers: MbtiAnswer[] = [
      {
        question: questions[0],
        response: 1,
      },
      {
        question: questions[1],
        response: 1,
      },
      {
        question: questions[2],
        response: 1,
      },
      {
        question: questions[3],
        response: 1,
      },
      {
        question: questions[4],
        response: 1,
      },
      {
        question: questions[5],
        response: 1,
      },
      {
        question: questions[6],
        response: 1,
      },
      {
        question: questions[7],
        response: 1,
      },
      {
        question: questions[8],
        response: 1,
      },
      {
        question: questions[9],
        response: 1,
      },
    ];

    const report = await AnswerMbtiQuestions.execute({ answers });

    expect(report.result).toEqual("ISTJ");
    expect(report).toBeInstanceOf(MbtiReport);
  });

  it("returns ESTP", async () => {
    const questions = await ListMbtiQuestions.execute({ questionsRepository });

    const answers: MbtiAnswer[] = [
      {
        question: questions[0],
        response: 7,
      },
      {
        question: questions[1],
        response: 7,
      },
      {
        question: questions[2],
        response: 7,
      },
      {
        question: questions[3],
        response: 7,
      },
      {
        question: questions[4],
        response: 7,
      },
      {
        question: questions[5],
        response: 7,
      },
      {
        question: questions[6],
        response: 7,
      },
      {
        question: questions[7],
        response: 7,
      },
      {
        question: questions[8],
        response: 7,
      },
      {
        question: questions[9],
        response: 7,
      },
    ];

    const report = await AnswerMbtiQuestions.execute({ answers });

    expect(report.result).toEqual("ESTP");
    expect(report).toBeInstanceOf(MbtiReport);
  });
});
