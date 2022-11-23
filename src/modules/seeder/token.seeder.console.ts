import { Injectable } from '@nestjs/common';
import { Command, Console } from 'nestjs-console';

@Console()
@Injectable()
export class TokenSeederConsole {
  constructor() {}
  @Command({
    command: 'seeder-token',
    description: 'seeder token',
  })
  async start(): Promise<void> {
    try {
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  }
}
