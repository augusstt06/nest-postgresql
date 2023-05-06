import { Board } from './board.entity';
import { DataSource } from 'typeorm';

export const boardRepository = [
  {
    provide: 'BOARD_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Board),
    inject: ['DATA_SOURCE'],
  },
];
