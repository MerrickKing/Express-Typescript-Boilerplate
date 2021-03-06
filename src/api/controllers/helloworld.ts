import { Controller, Get, Param } from "routing-controllers";

@Controller("/hello")
export class HelloWorldController
{
    @Get("/")
    private helloWorld()
    {
        return "Hello, world!";
    }
    
    @Get("/:name")
    private helloPerson(@Param("name") name : string)
    {
        return `Hello, ${name}!`;
    }
}