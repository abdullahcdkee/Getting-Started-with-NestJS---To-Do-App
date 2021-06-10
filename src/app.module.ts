import { Module } from '@nestjs/common'

import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ToDoAppModule } from './todoapp.module'

@Module({
  imports: [ToDoAppModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
