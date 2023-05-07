import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Board } from './board.entity';
import { CreateBoardDto } from 'src/dto/create-board.dto';
import { UpdateBoardDto } from 'src/dto/update-board.dto';

@Injectable()
export class BoardService {
  constructor(
    @Inject('BOARD_REPOSITORY')
    private boardRepository: Repository<Board>,
  ) {}
  AllBoards(): Promise<Board[]> {
    return this.boardRepository.find({});
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
  async update(id: number, updateBoardDto: UpdateBoardDto): Promise<Board> {
    const board = await this.boardRepository.findOne({
      where: {
        id,
      },
    });
    if (!board) {
      throw new NotFoundException('해당 id의 게시글이 없습니다.');
    }
    await this.boardRepository.update(id, updateBoardDto);
    const updateBoard = await this.boardRepository.findOne({
      where: {
        id,
      },
    });
    return updateBoard;
  }
  async delete(id: number) {
    const result = await this.boardRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException('해당 id의 게시글이 없습니다.');
    }
  }
}
