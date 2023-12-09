import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { SybilContractModule } from './sybil-contract/sybil-contract.module';

@Module({
  imports: [UserModule, SybilContractModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
