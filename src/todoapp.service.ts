import {
  Injectable,
  NotFoundException,
  NotAcceptableException,
} from '@nestjs/common'
import { ToDoTask } from './todotask.model'

@Injectable()
export class ToDoAppService {
  tasks: ToDoTask[] = []

  addTask(title: string, desc: string, priority: string) {
    const id = Object.keys(this.tasks).length + 1
    const newTask = new ToDoTask(id, title, desc, priority)
    this.tasks.push(newTask)

    return `Task with id ${id} has successfully been added!`
  }

  getTasks() {
    return [...this.tasks]
  }

  getTask(id: number) {
    const task = this.findTask(id)[0]

    return { ...task }
  }

  updateTaskById(id: number, title: string, desc: string, priority: string) {
    const [task, taskIndex] = this.findTask(id)
    const updatedTask = { ...task }

    if (title) {
      updatedTask.title = title
    }
    if (desc) {
      updatedTask.description = desc
    }
    if (priority) {
      updatedTask.priority = priority
    }

    this.tasks[taskIndex] = updatedTask

    return `Task with the id ${id} has been successfully updated`
  }

  removeTask(id: number) {
    const taskIndex = this.findTask(id)[1]
    this.tasks.splice(taskIndex, 1)

    return `Task with the id ${id} has been successfully deleted`
  }

  private findTask(id: number): [ToDoTask, number] {
    const taskIndex = this.tasks.findIndex((item) => item.id === +id) //Why didn't === work?
    const task = this.tasks[taskIndex]

    if (!task) {
      throw new NotFoundException(
        `Task with the specified id ${id} could not be found in the list.`,
      )
    }

    return [task, taskIndex]
  }
}
