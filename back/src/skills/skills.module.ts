import { Module } from "@nestjs/common";
import { SkillsController } from "./skills.controller";

@Module({
    imports: [],
    controllers: [SkillsController],
    providers: []
})
export class SkillsModule {
}