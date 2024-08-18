import { Module } from "@nestjs/common";
import { HoursStudiedController } from "./hours-studied.controller";

@Module({
    imports: [],
    controllers: [HoursStudiedController],
    providers: []
})
export class HoursStudiedModule {
}