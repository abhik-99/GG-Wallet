import { Injectable } from '@nestjs/common';
import { CreateChainDto } from './dto/create-chain.dto';
import { UpdateChainDto } from './dto/update-chain.dto';

@Injectable()
export class ChainService {
  create(createChainDto: CreateChainDto) {
    return 'This action adds a new chain';
  }

  findAll() {
    return `This action returns all chain`;
  }

  findOne(id: number) {
    return `This action returns a #${id} chain`;
  }

  update(id: number, updateChainDto: UpdateChainDto) {
    return `This action updates a #${id} chain`;
  }

  remove(id: number) {
    return `This action removes a #${id} chain`;
  }
}
