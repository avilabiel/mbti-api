import IUseCase from "@/app/contracts/i-use-case";
import MbtiAnswer from "@/entities/mbti-answer";
import MbtiReport from "@/entities/mbti-report";

class AnswerMbtiQuestions implements IUseCase {
  async execute({ answers }: { answers: MbtiAnswer[] }): Promise<MbtiReport> {
    const eiDimension = this.getDimensionResult({
      dimension: "EI",
      answers,
    });

    const snDimension = this.getDimensionResult({
      dimension: "SN",
      answers,
    });

    const tfDimension = this.getDimensionResult({
      dimension: "TF",
      answers,
    });

    const jpDimension = this.getDimensionResult({
      dimension: "JP",
      answers,
    });

    return new MbtiReport({
      result: `${eiDimension}${snDimension}${tfDimension}${jpDimension}`,
    });
  }

  private getDimensionResult({
    dimension,
    answers,
  }: {
    dimension: string;
    answers: MbtiAnswer[];
  }): string {
    const formattedDimension = dimension.toUpperCase();
    const allowedDimensions = ["EI", "JP", "TF", "SN"];
    const maxScore = 7;

    if (!allowedDimensions.includes(formattedDimension)) {
      throw new Error(`Not allowed dimension: "${dimension}"`);
    }

    let leftScore = { value: dimension[0], score: 0 };
    let rightScore = { value: dimension[1], score: 0 };

    answers.forEach((answer) => {
      if (answer.question.dimension !== dimension) {
        return;
      }

      const isQuestionLeft = answer.question.meaning === leftScore.value;
      const isQuestionRight = answer.question.meaning === rightScore.value;

      if (isQuestionLeft) {
        if (answer.response === 1) {
          rightScore.score += 3;
        }

        if (answer.response === 2) {
          rightScore.score += 2;
        }

        if (answer.response === 3) {
          rightScore.score += 1;
        }

        if (answer.response === 4) {
          return;
        }

        if (answer.response === 5) {
          leftScore.score += 1;
        }

        if (answer.response === 6) {
          leftScore.score += 2;
        }

        if (answer.response === 7) {
          leftScore.score += 3;
        }
      }

      if (isQuestionRight) {
        if (answer.response === 1) {
          leftScore.score += 3;
        }

        if (answer.response === 2) {
          leftScore.score += 2;
        }

        if (answer.response === 3) {
          leftScore.score += 1;
        }

        if (answer.response === 4) {
          return;
        }

        if (answer.response === 5) {
          rightScore.score += 1;
        }

        if (answer.response === 6) {
          rightScore.score += 2;
        }

        if (answer.response === 7) {
          rightScore.score += 3;
        }
      }
    });

    const finalScore = rightScore.score - leftScore.score;

    if (
      leftScore.score > rightScore.score ||
      leftScore.score === rightScore.score
    ) {
      return leftScore.value;
    }

    return rightScore.value;
  }
}

export default new AnswerMbtiQuestions();
