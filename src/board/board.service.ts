import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Board } from './board.entity';
import { CreateBoardDto } from 'src/dto/create-board.dto';

@Injectable()
export class BoardService {
  constructor(
    @Inject('BOARD_REPOSITORY')
    private boardRepository: Repository<Board>,
  ) {}
  AllBoards(): string {
    return 'All Boards return';
  }
  async create(createBoardDto: CreateBoardDto): Promise<Board> {
    const { title, description } = createBoardDto;
    const board = await this.boardRepository.create({
      title,
      description,
    });
    await this.boardRepository.save(board);
    return board;
  }
}
