import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { BoardService } from './board.service';
import { CreateBoardDto } from 'src/dto/create-board.dto';
import { Board } from './board.entity';
import { UpdateBoardDto } from 'src/dto/update-board.dto';

@Controller('board')
export class BoardController {
  constructor(private readonly boardService: BoardService) {}
  @Get()
  getAllBoards(): Promise<Board[]> {
    return this.boardService.AllBoards();
  }

  @Post()
  createBoard(@Body() boardData: CreateBoardDto): Promise<Board> {
    return this.boardService.create(boardData);
  }

  @Patch(`:id`)
  updateBoard(@Param('id') id: number, @Body() boardData: UpdateBoardDto) {
    return this.boardService.update(id, boardData);
  }
}
