import QuestionsMbtiRepositoryInMemory from "./externals/database/in-memory/questions-mbti-repository-in-memory";

export default {
  repositories: {
    questionsRepository: new QuestionsMbtiRepositoryInMemory(),
  },
};
