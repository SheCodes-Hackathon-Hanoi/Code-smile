import { Injectable } from "@nestjs/common";
import {
  PrismaService,
} from "src/common";
@Injectable()
export class DetailRankService {
  constructor(private readonly prisma: PrismaService) { }

  async getAllDetailRank() {
    return this.prisma.detailRank.findMany({
      select: {
        id: true,
        total_point: true,
        redeem_point: true,
      }
    })
  }
  
  async getDetailRank(id: string) {
    return this.prisma.detailRank.findUnique({
      where: { id: id },
      select: {
        id: true,
        total_point: true,
        redeem_point: true,
      }
    })
  }

  async createDetailRank(data: any) {
    return this.prisma.detailtRank.create({
      data: {
        total_point: data.total_point,
        
        redeem_point: data.redeem_point,
      }
    });
  }

  async updateDetailRank(id: string, data: any) {
    return this.prisma.detailRank.update({
      where: {
        id: id
      },
      data: {
        total_point: data.total_point,
        
        redeem_point: data.redeem_point,
      }
    })
  }

  async deleteDetailRank(id: string) {
    return this.prisma.detailRank.delete({
      where: {
        id: id
      },
      select: {
        total_point: true,
        redeem_point: true,
      }
    })
  }

}