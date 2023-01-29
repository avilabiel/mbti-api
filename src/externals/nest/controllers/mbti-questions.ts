import { Controller, Get } from "@nestjs/common";
import ListMbtiQuestions from "@/app/use-cases/list-mbti-questions";
import config from "@/config";
import MbtiQuestion from "@/entities/mbti-question";

@Controller("mbti")
export class MbtiQuestionsController {
  @Get("/questions")
  async findAll(): Promise<MbtiQuestion[]> {
    return await ListMbtiQuestions.execute({
      questionsRepository: config.repositories.questionsRepository,
    });
  }
}
