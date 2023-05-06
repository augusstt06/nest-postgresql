import { Injectable } from '@nestjs/common';

@Injectable()
export class BoardService {
  AllBoards(): string {
    return 'All Boards return';
  }
}
