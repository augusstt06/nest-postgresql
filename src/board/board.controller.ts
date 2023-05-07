import { Body, Controller, Get, Post } from '@nestjs/common';
import { BoardService } from './board.service';
import { CreateBoardDto } from 'src/dto/create-board.dto';
import { Board } from './board.entity';

@Controller('board')
export class BoardController {
  constructor(private readonly boardService: BoardService) {}
  @Get()
  getAllBoards(): string {
    return this.boardService.AllBoards();
  }

  @Post()
  createBoard(@Body() boardData: CreateBoardDto): Promise<Board> {
    return this.boardService.create(boardData);
  }
}
