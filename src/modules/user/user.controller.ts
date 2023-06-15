import { Body, Delete, Get, JsonController, Param, Post, Put } from "routing-controllers";
import { UserBusiness } from "./user.business";
import { IUserDocument } from "./user.interfaces";

@JsonController("/users")
export class UserController extends UserBusiness {
  @Get("/:id")
  public async userGetOne(@Param("id") id: string): Promise<any> {
    return await this.getUser(id);
  }

  @Get("/")
  public async userGetAll(): Promise<Object> {
    return await this.getAllUsers();
  }

  @Post("/")
  public async userCreate(@Body() body: IUserDocument): Promise<Object> {
    return await this.createUser(body);
  }

  @Put("/:id")
  public async updateUser(
    @Param("id") id: string,
    @Body() body: IUserDocument
  ): Promise<Object> {
    return await this.updateUserById(id, body);
  }

  @Delete("/:id")
  public async userDelete(@Param("id") id: string): Promise<Object> {
    return await this.deleteUser(id);
  }

  @Post("/fullname")
  public async updateFullNameUser(): Promise<Object> {
    return await this.updateUserFullName();
  }
}
