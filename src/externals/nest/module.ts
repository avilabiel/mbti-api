import { Module } from "@nestjs/common";
import { MbtiQuestionsController } from "./controllers/mbti-questions";
import { MbtiSurveysController } from "./controllers/mbti-surveys";
@Module({
  imports: [],
  controllers: [MbtiQuestionsController, MbtiSurveysController],
  providers: [],
})
export default class AppModule {}
