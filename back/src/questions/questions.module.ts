import { Module } from "@nestjs/common";
import { QuestionsController } from "./questions.controller";

@Module({
    imports: [],
    controllers: [QuestionsController],
    providers: []
})
export class QuestionsModule {

}