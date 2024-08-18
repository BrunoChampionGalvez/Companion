import { Module } from "@nestjs/common";
import { BadgesController } from "./badges.controller";

@Module({
    imports: [],
    controllers: [BadgesController],
    providers: []
})
export class BadgesModule {
}