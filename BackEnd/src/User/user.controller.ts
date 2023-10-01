import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  ParseUUIDPipe,
  Req,
  Post,
  Put,
  Res,
  UseGuards
} from "@nestjs/common";
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from "@nestjs/swagger";
import { Response } from 'express';
import { JWTAuthGuard } from "src/common";
import { ErrorResponse } from "src/common/error-response";
import { UserService } from "./user.service";


@Controller("users")
@ApiTags("User")
@ApiResponse({ status: 400, type: ErrorResponse })
@ApiResponse({ status: 500, type: ErrorResponse })
export class CourseController {
  constructor(private readonly userService: UserService) {
  }

  @Get("")
  @UseGuards(JWTAuthGuard)
  @ApiBearerAuth()
  @HttpCode(200)
  @ApiOperation({ summary: "Get all users" })
  async findAll(@Res() response: Response) {
    const result = await this.userService.getAllUser();
    if (!result) {
      throw new BadRequestException("User does not exist.");
    }
    response.status(200).json({ result });
  }


  @Get(":id")
  @UseGuards(JWTAuthGuard)
  @ApiBearerAuth()
  @HttpCode(200)
  @ApiOperation({ summary: "Get user detail" })
  async findOne(@Param("id", ParseUUIDPipe) id: string, @Res() response: Response) {
    const result = await this.userService.getUser(id);
    if (!result) {
      throw new BadRequestException("User does not exist.");
    }
    response.status(200).json({ result });
  }

  @Post("")
  @HttpCode(200)
  @UseGuards(JWTAuthGuard)
  @ApiOperation({ summary: "Create user" })
  @HttpCode(201)
  async createUser(@Body() payload: any, @Req() request: any, @Res() response: Response) {
    const user = await this.userService.createUser(payload);
    if (!user) {
      throw new BadRequestException("User does not success.");
    }
    response.status(201).json({ user });
  }

  @Put(":id")
  @UseGuards(JWTAuthGuard)
  @ApiBearerAuth()
  @HttpCode(201)
  @ApiOperation({ summary: "Update user detail" })
  async updateUser(@Param("id", ParseUUIDPipe) id: string, @Body() payload: any, @Res() response: Response) {
    const user = await this.userService.updateUser(id, payload);
    if (!user) {
      throw new BadRequestException("User does not success.");
    }
    response.status(204).json({ user });
  }

  @Delete(":id")
  @UseGuards(JWTAuthGuard)
  @ApiBearerAuth()
  @HttpCode(204)
  @ApiOperation({ summary: "Delete user detail" })
  async deleteUser(@Param("id", ParseUUIDPipe) id: string, @Res() response: Response) {
    const user = await this.userService.deleteUser(id);
    if (!user) {
      throw new BadRequestException("User does not success.");
    }
    response.status(204).json({ message: 'Deleted' });
  }
}
