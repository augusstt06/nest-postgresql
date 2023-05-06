import { Module } from '@nestjs/common';
import { BoardService } from './board.service';
import { BoardController } from './board.controller';
import { DatabaseModule } from 'src/database/database.module';
import { boardRepository } from './board.repository';

@Module({
  imports: [DatabaseModule],
  providers: [...boardRepository, BoardService],
  controllers: [BoardController],
})
export class BoardModule {}
