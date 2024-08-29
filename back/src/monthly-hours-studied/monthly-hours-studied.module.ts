import { Module } from "@nestjs/common";
import { MonthlyHoursStudiedController } from "./monthly-hours-studied.controller";

@Module({
    imports: [],
    controllers: [MonthlyHoursStudiedController],
    providers: []
})
export class HoursStudiedModule {
}