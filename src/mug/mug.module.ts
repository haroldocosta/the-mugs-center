import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MugService } from './services/mug.service';
import { MugController } from './controllers/mug.controller';
import { MugRepository } from './mug.repository';

@Module({
  imports: [TypeOrmModule.forFeature([MugRepository])],
  controllers: [MugController],
  providers: [
    {
      provide: 'MUG_SERVICE',
      useClass: MugService,
    },
  ],
  exports: [
    {
      provide: 'MUG_SERVICE',
      useClass: MugService,
    },
  ]
})
export class MugModule { }