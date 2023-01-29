import { v4 } from "uuid";

import IQuestionsMbti from "@/app/contracts/i-questions-mbti";
import MbtiQuestion from "@/entities/mbti-question";

export default class QuestionsMbtiRepositoryInMemory implements IQuestionsMbti {
  private questions: MbtiQuestion[] = [];

  async list(): Promise<MbtiQuestion[]> {
    this.questions = QUESTIONS.map(this.build);
    return Promise.resolve(this.questions);
  }

  async getById(questionId: string): Promise<MbtiQuestion | null> {
    return this.build(
      this.questions.find((question) => question.id === questionId)
    );
  }

  private build(rawQuestion: any): MbtiQuestion {
    const id = v4();
    return new MbtiQuestion({
      ...rawQuestion,
      id,
      createdAt: new Date().toLocaleString("en-US"),
    });
  }
}

const QUESTIONS = [
  {
    question: "You find it takes effort to introduce yourself to other people.",
    dimension: "EI",
    direction: 1,
    meaning: "I",
  },
  {
    question: "You consider yourself more practical than creative.",
    dimension: "SN",
    direction: -1,
    meaning: "S",
  },
  {
    question:
      "Winning a debate matters less to you than making sure no one gets upset.",
    dimension: "TF",
    direction: 1,
    meaning: "F",
  },
  {
    question:
      "You get energized going to social events that involve many interactions.",
    dimension: "EI",
    direction: -1,
    meaning: "E",
  },
  {
    question:
      "You often spend time exploring unrealistic and impractical yet intriguing ideas.",
    dimension: "SN",
    direction: 1,
    meaning: "N",
  },
  {
    question:
      "Deadlines seem to you to be of relative rather than absolute importance.",
    dimension: "JP",
    direction: 1,
    meaning: "P",
  },
  {
    question:
      "Logic is usually more important than heart when it comes to making important decisions.",
    dimension: "TF",
    direction: -1,
    meaning: "T",
  },
  {
    question: "Your home and work environments are quite tidy.",
    dimension: "JP",
    direction: -1,
    meaning: "J",
  },
  {
    question: "You do not mind being at the center of attention.",
    dimension: "EI",
    direction: -1,
    meaning: "E",
  },
  {
    question:
      "Keeping your options open is more important than having a to-do list.",
    dimension: "JP",
    direction: 1,
    meaning: "P",
  },
];
