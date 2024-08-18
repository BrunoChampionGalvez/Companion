import { Module } from "@nestjs/common";
import { QuizzesController } from "./quizzes.controller";

@Module({
    imports: [],
    controllers: [QuizzesController],
    providers: []
})
export class QuizzesModule {
}