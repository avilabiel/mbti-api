import {
  Controller,
  Get,
  Post,
  Body,
  HttpStatus,
  HttpException,
} from "@nestjs/common";
import AnswerMbtiQuestions from "@/app/use-cases/answer-mbti-questions/answer-mbti-questions";
import MbtiAnswer from "@/entities/mbti-answer";
import MbtiReport from "@/entities/mbti-report";
import config from "@/config";

interface SurveyCreatePayload {
  email: string;
  answers: {
    questionId: string;
    response: number;
  }[];
}

@Controller("mbti")
export class MbtiSurveysController {
  @Post("surveys")
  async create(@Body() payload: SurveyCreatePayload): Promise<MbtiReport> {
    const formattedAnswers: MbtiAnswer[] = await Promise.all(
      payload.answers.map(async (answer) => {
        const question = await config.repositories.questionsRepository.getById(
          answer.questionId
        );

        return {
          question,
          response: answer.response,
        };
      })
    );

    try {
      return await AnswerMbtiQuestions.execute({
        answers: formattedAnswers,
      });
    } catch (error) {
      throw new HttpException(
        "Internal server error",
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }
}
