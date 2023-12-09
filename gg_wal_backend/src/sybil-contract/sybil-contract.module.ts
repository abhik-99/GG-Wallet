import { Module } from '@nestjs/common';
import { SybilContractService } from './sybil-contract.service';
import { SybilContractController } from './sybil-contract.controller';

@Module({
  controllers: [SybilContractController],
  providers: [SybilContractService],
})
export class SybilContractModule {}
