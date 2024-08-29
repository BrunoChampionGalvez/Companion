import { Module } from "@nestjs/common";
import { YearlyHoursStudiedController } from "./yearly-hours-studied.controller";

@Module({
    imports: [],
    controllers: [YearlyHoursStudiedController],
    providers: []
})
export class HoursStudiedModule {
}