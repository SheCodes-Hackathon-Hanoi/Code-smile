import { Injectable } from "@nestjs/common";
import {
  PrismaService,
} from "src/common";
@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) { }

  async getAllUser() {
    return this.prisma.user.findMany({
      select: {
        id: true,
        birthDate: true,
        name: true,
        email: true,
        password: true,
        address: true,
      }
    })
  }
  
  async getUser(id: string) {
    return this.prisma.user.findUnique({
      where: { id: id },
      select: {
        id: true,
        birthDate: true,
        name: true,
        email: true,
        password: true,
        address: true,
        
        
      }
    })
  }

  async createUser(data: any) {
    return this.prisma.user.create({
      data: {
        birthDate: data.birthDate,
        name: data.name,
        email: data.email,
        password: data.password,
        address: data.address,
      }
    });
  }

  async updateUser(id: string, data: any) {
    return this.prisma.user.update({
      where: {
        id: id
      },
      data: {
        birthDate: data.birthDate,
        name: data.name,
        email: data.email,
        password: data.password,
        address: data.address,
      }
    })
  }

  async deleteUser(id: string) {
    return this.prisma.user.delete({
      where: {
        id: id
      },
      select: {
        birthDate: true,
        name: true,
        email: true,
        password: true,
        address: true,
      }
    })
  }

}