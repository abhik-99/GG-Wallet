import { PartialType } from '@nestjs/mapped-types';
import { CreateSybilContractDto } from './create-sybil-contract.dto';

export class UpdateSybilContractDto extends PartialType(CreateSybilContractDto) {}
