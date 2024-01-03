import { Controller, Get } from "@nestjs/common";

@Controller('/app')
export class AppController {
    @Get('/hii')
    getRootRoute(){
        return 'Hii My first controller method!!'
    }

    @Get('/bye')
    getByeRoute(){
        return 'Bye we will meet soon!!'
    }
}