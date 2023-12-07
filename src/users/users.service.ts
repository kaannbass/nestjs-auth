import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}
  async getUsers() {
    return await this.prisma.user.findMany({
      select: { id: true, email: true },
    });
  }
  async getMyUser(id: string) {
    const user = await this.prisma.user.findUnique({
      where: { id: parseInt(id, 10) },
    });

    if (!user) {
      return {
        message: 'No user found with the specified ID.',
      };
    }
    return { user };
  }
}
