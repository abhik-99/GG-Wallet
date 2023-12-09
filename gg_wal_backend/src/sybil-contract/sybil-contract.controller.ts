import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SybilContractService } from './sybil-contract.service';
import { CreateSybilContractDto } from './dto/create-sybil-contract.dto';
import { UpdateSybilContractDto } from './dto/update-sybil-contract.dto';

@Controller('sybil-contract')
export class SybilContractController {
  constructor(private readonly sybilContractService: SybilContractService) {}

  @Post()
  create(@Body() createSybilContractDto: CreateSybilContractDto) {
    return this.sybilContractService.create(createSybilContractDto);
  }

  @Get()
  findAll() {
    return this.sybilContractService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sybilContractService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSybilContractDto: UpdateSybilContractDto) {
    return this.sybilContractService.update(+id, updateSybilContractDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sybilContractService.remove(+id);
  }
}
