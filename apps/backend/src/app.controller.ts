import { Body, Controller, Get, Post, Req } from "@nestjs/common";
import { AppService } from "./app.service";
import { CreateCatDto } from "./createCat.dto";
import { ApiOkResponse } from "@nestjs/swagger";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOkResponse({ type: String })
  getHello(@Req() req: Request): string {
    console.log(req.headers);
    return this.appService.getHello();
  }

  @Post()
  create(@Body() createCatDto: CreateCatDto) {
    console.log(createCatDto);
    return "This action adds a new cat";
  }
}
