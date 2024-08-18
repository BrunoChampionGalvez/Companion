import { Controller, Get, HttpCode } from "@nestjs/common";
import { UsersService } from "./users.service";

@Controller('users')
export class UsersController {
    constructor(
        private readonly usersService: UsersService
    ) {}

    @Get()
    @HttpCode(200)
    getUsers() {
        return this.usersService.getUsers()
    }
}