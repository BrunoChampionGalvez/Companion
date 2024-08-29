import { Module } from "@nestjs/common";
import { WeeklyHoursStudiedController } from "./weekly-hours-studied.controller";

@Module({
    imports: [],
    controllers: [WeeklyHoursStudiedController],
    providers: []
})
export class WeeklyHoursStudiedModule {
}