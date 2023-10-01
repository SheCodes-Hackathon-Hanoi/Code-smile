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
  import { Detail_rankService } from "./detailRank.service";
  
  
  @Controller("detail_ranks")
  @ApiTags("Detail_rank")
  @ApiResponse({ status: 400, type: ErrorResponse })
  @ApiResponse({ status: 500, type: ErrorResponse })
  export class Detail_rankController {
    constructor(private readonly detail_rankService: Detail_rankService) {
    }
  
    @Get("")
    @UseGuards(JWTAuthGuard)
    @ApiBearerAuth()
    @HttpCode(200)
    @ApiOperation({ summary: "Get all detail_ranks" })
    async findAll(@Res() response: Response) {
      const result = await this.detail_rankService.getAllDetail_rank();
      if (!result) {
        throw new BadRequestException("Detail_rank does not exist.");
      }
      response.status(200).json({ result });
    }
  
  
    @Get(":id")
    @UseGuards(JWTAuthGuard)
    @ApiBearerAuth()
    @HttpCode(200)
    @ApiOperation({ summary: "Get detail_rank detail" })
    async findOne(@Param("id", ParseUUIDPipe) id: string, @Res() response: Response) {
      const result = await this.detail_rankService.getDetail_rank(id);
      if (!result) {
        throw new BadRequestException("Detail_rank does not exist.");
      }
      response.status(200).json({ result });
    }
  
    @Post("")
    @HttpCode(200)
    @UseGuards(JWTAuthGuard)
    @ApiOperation({ summary: "Create detail_rank" })
    @HttpCode(201)
    async createDetail_rank(@Body() payload: any, @Req() request: any, @Res() response: Response) {
      const detail_rank = await this.detail_rankService.createDetail_rank(payload);
      if (!detail_rank) {
        throw new BadRequestException("Detail_rank does not success.");
      }
      response.status(201).json({ detail_rank });
    }
  
    @Put(":id")
    @UseGuards(JWTAuthGuard)
    @ApiBearerAuth()
    @HttpCode(201)
    @ApiOperation({ summary: "Update detail_rank detail" })
    async updateDetail_rank(@Param("id", ParseUUIDPipe) id: string, @Body() payload: any, @Res() response: Response) {
      const detail_rank = await this.detail_rankService.updateDetail_rank(id, payload);
      if (!detail_rank) {
        throw new BadRequestException("Detail_rank does not success.");
      }
      response.status(204).json({detail_rank} );
    }
  
    @Delete(":id")
    @UseGuards(JWTAuthGuard)
    @ApiBearerAuth()
    @HttpCode(204)
    @ApiOperation({ summary: "Delete detail_rank detail" })
    async deleteDetail_rank(@Param("id", ParseUUIDPipe) id: string, @Res() response: Response) {
      const detail_rank = await this.detail_rankService.deleteDetail_rank(id);
      if (!detail_rank) {
        throw new BadRequestException("Detail_rank does not success.");
      }
      response.status(204).json({ message: 'Deleted' });
    }
  }
  