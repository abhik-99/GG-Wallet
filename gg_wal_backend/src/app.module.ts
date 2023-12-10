import * as Joi from 'joi';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { SybilContractModule } from './sybil-contract/sybil-contract.module';
import { ChainModule } from './chain/chain.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    UserModule,
    SybilContractModule,
    ChainModule,
    PrismaModule,
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        DATABASE_URL: Joi.string().required(),
        OWNER_PRIV_KEY: Joi.string().required(),
      })
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
