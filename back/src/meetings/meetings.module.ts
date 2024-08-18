import { Module } from "@nestjs/common";
import { MeetingsController } from "./meetings.controller";

@Module({
    imports: [],
    controllers: [MeetingsController],
    providers: []
})
export class MeetingsModule {
}