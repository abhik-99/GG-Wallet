import { Injectable } from '@nestjs/common';
import { CreateSybilContractDto } from './dto/create-sybil-contract.dto';
import { UpdateSybilContractDto } from './dto/update-sybil-contract.dto';

@Injectable()
export class SybilContractService {
  create(createSybilContractDto: CreateSybilContractDto) {
    return 'This action adds a new sybilContract';
  }

  findAll() {
    return `This action returns all sybilContract`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sybilContract`;
  }

  update(id: number, updateSybilContractDto: UpdateSybilContractDto) {
    return `This action updates a #${id} sybilContract`;
  }

  remove(id: number) {
    return `This action removes a #${id} sybilContract`;
  }
}
