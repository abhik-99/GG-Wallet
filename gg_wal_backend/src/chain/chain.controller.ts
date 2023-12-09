import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ChainService } from './chain.service';
import { CreateChainDto } from './dto/create-chain.dto';
import { UpdateChainDto } from './dto/update-chain.dto';

@Controller('chain')
export class ChainController {
  constructor(private readonly chainService: ChainService) {}

  @Post()
  create(@Body() createChainDto: CreateChainDto) {
    return this.chainService.create(createChainDto);
  }

  @Get()
  findAll() {
    return this.chainService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.chainService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateChainDto: UpdateChainDto) {
    return this.chainService.update(+id, updateChainDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.chainService.remove(+id);
  }
}
