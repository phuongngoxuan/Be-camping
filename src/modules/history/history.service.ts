import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { HistoriesRepository } from '../../models/repositories/histories.repository';
@Injectable()
export class HistoryService {
  constructor(
    @InjectRepository(HistoriesRepository, 'report')
    private historiesRepositoryReport: HistoriesRepository,
  ) {}
}
