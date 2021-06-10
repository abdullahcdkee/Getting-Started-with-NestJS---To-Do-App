import { Module } from '@nestjs/common';
import { ToDoAppController } from './todoapp.controller';
import { ToDoAppService } from './todoapp.service';

@Module({
  imports: [],
  controllers: [ToDoAppController],
  providers: [ToDoAppService],
})
export class ToDoAppModule {}
