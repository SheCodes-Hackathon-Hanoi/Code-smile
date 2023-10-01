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
  import { ChallengeService } from "./challenge.service";
  
  
  @Controller("users")
  @ApiTags("User")
  @ApiResponse({ status: 400, type: ErrorResponse })
  @ApiResponse({ status: 500, type: ErrorResponse })
  export class CourseController {
    constructor(private readonly challengeService: ChallengeService) {
    }
  
    @Get("")
    @UseGuards(JWTAuthGuard)
    @ApiBearerAuth()
    @HttpCode(200)
    @ApiOperation({ summary: "Get all users" })
    async findAll(@Res() response: Response) {
      const result = await this.challengeService.getAllUser();
      if (!result) {
        throw new BadRequestException("User does not exist.");
      }
      response.status(200).json({ result });
    }
  
  
    @Get(":id")
    @UseGuards(JWTAuthGuard)
    @ApiBearerAuth()
    @HttpCode(200)
    @ApiOperation({ summary: "Get challenge detail" })
    async findOne(@Param("id", ParseUUIDPipe) id: string, @Res() response: Response) {
      const result = await this.challengeService.getChallenge(id);
      if (!result) {
        throw new BadRequestException("Challenge does not exist.");
      }
      response.status(200).json({ result });
    }
  
    @Post("")
    @HttpCode(200)
    @UseGuards(JWTAuthGuard)
    @ApiOperation({ summary: "Create challenge" })
    @HttpCode(201)
    async createChallenge(@Body() payload: any, @Req() request: any, @Res() response: Response) {
      const challenge = await this.challengeService.createChallenge(payload);
      if (!challenge) {
        throw new BadRequestException("Challenge does not success.");
      }
      response.status(201).json({ challenge });
    }
  
    @Put(":id")
    @UseGuards(JWTAuthGuard)
    @ApiBearerAuth()
    @HttpCode(201)
    @ApiOperation({ summary: "Update challenge detail" })
    async updateChallenge(@Param("id", ParseUUIDPipe) id: string, @Res() response: Response) {
      const challenge = await this.challengeService.updateChallenge(id);
      if (!challenge) {
        throw new BadRequestException("Challenge does not success.");
      }
      response.status(204).json({ challenge });
    }
  
    @Delete(":id")
    @UseGuards(JWTAuthGuard)
    @ApiBearerAuth()
    @HttpCode(204)
    @ApiOperation({ summary: "Delete challenge detail" })
    async deleteChallenge(@Param("id", ParseUUIDPipe) id: string, @Res() response: Response) {
      const challenge = await this.challengeService.deleteChallenge(id);
      if (!challenge) {
        throw new BadRequestException("Challenge does not success.");
      }
      response.status(204).json({ message: 'Deleted' });
    }
  }
  