import { Module } from "@nestjs/common";
import { DailyHoursStudiedController } from "./daily-hours-studied.controller";

@Module({
    imports: [],
    controllers: [DailyHoursStudiedController],
    providers: []
})
export class DailyHoursStudiedModule {
}