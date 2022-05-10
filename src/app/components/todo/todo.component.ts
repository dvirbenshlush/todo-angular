import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { ITodo } from 'src/app/models/todo.interface';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  @Input() todo: ITodo;

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    
  }



  public onCompleteTodo(todo: ITodo): void{
    todo.isCompleted = true;
  }

  public onArchivedTodo(): void{
    this.todo.isArchived = true;
  }
}
