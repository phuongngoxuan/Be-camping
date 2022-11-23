import { Controller } from '@nestjs/common';
import { HistoryService } from './history.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('history')
@ApiTags('history')
export class HistoryController {
  constructor(private userHistoryService: HistoryService) {}
}
