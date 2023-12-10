import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { ConfigService } from '@nestjs/config';
import { privateKeyToAccount } from 'viem/accounts'
import { createWalletClient, http } from 'viem';
import { mainnet } from 'viem/chains'

@Injectable()
export class UserService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly configService: ConfigService,
  ) {}
  create({ walletAddress }: CreateUserDto) {
    return this.prismaService.user.create({
      data: {
        walletAddress,
      },
    });
  }
  async generateSig(walletAddress: string) {
    const user = await this.prismaService.user.findUnique({
      where: {
        walletAddress,
      },
    });
    if (!user.verified) throw new UnauthorizedException('User is not Verified');
    const walletClient = createWalletClient({
      chain: mainnet,
      transport: http()
      
    })
    const account = privateKeyToAccount(`0x${this.configService.get<string>("OWNER_PRIV_KEY")}`)
    console.log("Owner Account recovered", account);
    const sig = await walletClient.signMessage({
      account,
      message: walletAddress
    })

    return {sig};
  }

  verifyUser(walletAddress: string, anonAdhaarPcd: string) {
    return this.prismaService.user.update({
      where: {
        walletAddress,
      },
      data: {
        anonAdhaarPcd,
      },
    });
  }

  findAll() {
    return this.prismaService.user.findMany();
  }

  findOne(walletAddress: string) {
    return this.prismaService.user.findFirst({
      where: {
        walletAddress,
      },
    });
  }

  remove(walletAddress: string) {
    return this.prismaService.user.delete({
      where: {
        walletAddress,
      },
    });
  }
}
