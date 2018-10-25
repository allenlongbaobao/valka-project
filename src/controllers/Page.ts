import { Controller, Get, IContext, Post, BadRequest } from "@aotools/valka"


interface IWxUserInfo {

}

@Controller()
export class PageController {

  @Get("/error", "error.html")
  public async error(ctx: IContext) {
    return {}
  }

  @Get("/use", "index.html")
  public async mainPage(ctx: IContext) {
    return { title: "欢迎使用 valka" }
  }

}
