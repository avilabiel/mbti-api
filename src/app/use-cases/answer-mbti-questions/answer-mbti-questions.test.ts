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
        answer: 4,
      },
      {
        question: questions[1],
        answer: 3,
      },
      {
        question: questions[2],
        answer: 1,
      },
      {
        question: questions[3],
        answer: 6,
      },
      {
        question: questions[4],
        answer: 7,
      },
      {
        question: questions[5],
        answer: 3,
      },
      {
        question: questions[6],
        answer: 5,
      },
      {
        question: questions[7],
        answer: 3,
      },
      {
        question: questions[8],
        answer: 6,
      },
      {
        question: questions[9],
        answer: 6,
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
        answer: 1,
      },
      {
        question: questions[1],
        answer: 5,
      },
      {
        question: questions[2],
        answer: 4,
      },
      {
        question: questions[3],
        answer: 6,
      },
      {
        question: questions[4],
        answer: 5,
      },
      {
        question: questions[5],
        answer: 2,
      },
      {
        question: questions[6],
        answer: 6,
      },
      {
        question: questions[7],
        answer: 3,
      },
      {
        question: questions[8],
        answer: 3,
      },
      {
        question: questions[9],
        answer: 2,
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
        answer: 3,
      },
      {
        question: questions[1],
        answer: 2,
      },
      {
        question: questions[2],
        answer: 6,
      },
      {
        question: questions[3],
        answer: 1,
      },
      {
        question: questions[4],
        answer: 7,
      },
      {
        question: questions[5],
        answer: 3,
      },
      {
        question: questions[6],
        answer: 2,
      },
      {
        question: questions[7],
        answer: 5,
      },
      {
        question: questions[8],
        answer: 2,
      },
      {
        question: questions[9],
        answer: 7,
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
        answer: 3,
      },
      {
        question: questions[1],
        answer: 4,
      },
      {
        question: questions[2],
        answer: 7,
      },
      {
        question: questions[3],
        answer: 1,
      },
      {
        question: questions[4],
        answer: 2,
      },
      {
        question: questions[5],
        answer: 5,
      },
      {
        question: questions[6],
        answer: 4,
      },
      {
        question: questions[7],
        answer: 3,
      },
      {
        question: questions[8],
        answer: 2,
      },
      {
        question: questions[9],
        answer: 6,
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
        answer: 4,
      },
      {
        question: questions[1],
        answer: 4,
      },
      {
        question: questions[2],
        answer: 4,
      },
      {
        question: questions[3],
        answer: 4,
      },
      {
        question: questions[4],
        answer: 4,
      },
      {
        question: questions[5],
        answer: 4,
      },
      {
        question: questions[6],
        answer: 4,
      },
      {
        question: questions[7],
        answer: 4,
      },
      {
        question: questions[8],
        answer: 4,
      },
      {
        question: questions[9],
        answer: 4,
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
        answer: 1,
      },
      {
        question: questions[1],
        answer: 1,
      },
      {
        question: questions[2],
        answer: 1,
      },
      {
        question: questions[3],
        answer: 1,
      },
      {
        question: questions[4],
        answer: 1,
      },
      {
        question: questions[5],
        answer: 1,
      },
      {
        question: questions[6],
        answer: 1,
      },
      {
        question: questions[7],
        answer: 1,
      },
      {
        question: questions[8],
        answer: 1,
      },
      {
        question: questions[9],
        answer: 1,
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
        answer: 7,
      },
      {
        question: questions[1],
        answer: 7,
      },
      {
        question: questions[2],
        answer: 7,
      },
      {
        question: questions[3],
        answer: 7,
      },
      {
        question: questions[4],
        answer: 7,
      },
      {
        question: questions[5],
        answer: 7,
      },
      {
        question: questions[6],
        answer: 7,
      },
      {
        question: questions[7],
        answer: 7,
      },
      {
        question: questions[8],
        answer: 7,
      },
      {
        question: questions[9],
        answer: 7,
      },
    ];

    const report = await AnswerMbtiQuestions.execute({ answers });

    expect(report.result).toEqual("ESTP");
    expect(report).toBeInstanceOf(MbtiReport);
  });
});

/*

{
  "Question 1": {
    "Test Case A": 4,
    "Test Case B": 1,
    "Test Case D": 3,
    "Test Case E": 3,
    "Test Case F": 4,
    "Test Case G": 1,
    "Test Case H": 7
  },
  "Question 2": {
    "Test Case A": 3,
    "Test Case B": 5,
    "Test Case D": 2,
    "Test Case E": 4,
    "Test Case F": 4,
    "Test Case G": 1,
    "Test Case H": 7
  },
  "Question 3": {
    "Test Case A": 1,
    "Test Case B": 4,
    "Test Case D": 6,
    "Test Case E": 7,
    "Test Case F": 4,
    "Test Case G": 1,
    "Test Case H": 7
  },
  "Question 4": {
    "Test Case A": 6,
    "Test Case B": 6,
    "Test Case D": 1,
    "Test Case E": 1,
    "Test Case F": 4,
    "Test Case G": 1,
    "Test Case H": 7
  },
  "Question 5": {
    "Test Case A": 7,
    "Test Case B": 5,
    "Test Case D": 7,
    "Test Case E": 2,
    "Test Case F": 4,
    "Test Case G": 1,
    "Test Case H": 7
  },
  "Question 6": {
    "Test Case A": 3,
    "Test Case B": 2,
    "Test Case D": 3,
    "Test Case E": 5,
    "Test Case F": 4,
    "Test Case G": 1,
    "Test Case H": 7
  },
  "Question 7": {
    "Test Case A": 5,
    "Test Case B": 6,
    "Test Case D": 2,
    "Test Case E": 4,
    "Test Case F": 4,
    "Test Case G": 1,
    "Test Case H": 7
  },
  "Question 8": {
    "Test Case A": 3,
    "Test Case B": 3,
    "Test Case D": 5,
    "Test Case E": 3,
    "Test Case F": 4,
    "Test Case G": 1,
    "Test Case H": 7
  },
  "Question 9": {
    "Test Case A": 6,
    "Test Case B": 3,
    "Test Case D": 2,
    "Test Case E": 2,
    "Test Case F": 4,
    "Test Case G": 1,
    "Test Case H": 7
  },
  "Question 10": {
    "Test Case A": 6,
    "Test Case B": 2,
    "Test Case D": 7,
    "Test Case E": 6,
    "Test Case F": 4,
    "Test Case G": 1,
    "Test Case H": 7
  },
  "Result:": {
    "Test Case A": "ENTP",
    "Test Case B": "ESTJ",
    "Test Case D": "INFP",
    "Test Case E": "ISFP",
    "Test Case F": "ESTJ",
    "Test Case G": "ISTJ",
    "Test Case H": "ESTP"
  }
}
*/
