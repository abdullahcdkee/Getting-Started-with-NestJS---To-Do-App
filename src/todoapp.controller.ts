import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Header,
  Body,
  Param,
  Patch,
} from '@nestjs/common'
import { ToDoAppService } from './todoapp.service'

@Controller('ToDoTasks')
export class ToDoAppController {
  constructor(private readonly todoappService: ToDoAppService) {}

  @Post()
  // @Header('Content-Type', 'text/html')
  addTask(
    @Body('title')
    taskTitle: string,
    @Body('desc')
    taskDesc: string,
    @Body('priority')
    taskPriority: string,
  ): string {
    return this.todoappService.addTask(taskTitle, taskDesc, taskPriority)
  }

  @Get()
  getTasks() {
    return this.todoappService.getTasks()
  }

  @Get(':id')
  getTask(@Param('id') taskId: number) {
    return this.todoappService.getTask(taskId)
  }

  @Patch(':id')
  updateTask(
    @Param('id') taskId: number,
    @Body('title') taskTitle: string,
    @Body('desc') taskDesc: string,
    @Body('priority') taskPriority: string,
  ): string {
    return this.todoappService.updateTask(
      taskId,
      taskTitle,
      taskDesc,
      taskPriority,
    )
  }

  @Delete(':id')
  removeTask(@Param('id') taskId: number): string {
    return this.todoappService.removeTask(taskId)
  }
}
