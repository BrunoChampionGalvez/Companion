import { Module } from "@nestjs/common";
import { GoalsController } from "./goals.controller";

@Module({
    imports: [],
    controllers: [GoalsController],
    providers: []
})
export class GoalsModule {
}