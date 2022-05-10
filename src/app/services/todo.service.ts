import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { ITodo } from '../models/todo.interface';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
// private mock =  [
//   {
//     "id" : 1,
//     "title": "Caracara, yellow-headed",
//     "descripsion": "Laceration without foreign body of abdominal wall, left upper quadrant with penetration into peritoneal cavity",
//     "isCompleted": false,
//     "isArchived": false,
//     "endDate": "5/28/2021",
//     "selected": true
//   },
//    {
//     "id" : 2,
//     "title": "Cat, civet",
//     "descripsion": "Other physeal fracture of unspecified metatarsal, initial encounter for open fracture",
//     "isCompleted": false,
//     "isArchived": false,
//     "endDate": "8/6/2021",
//     "selected": false
//   }, {
//     "id" : 3,
//     "title": "Caiman, spectacled",
//     "descripsion": "Nondisplaced fracture of base of third metacarpal bone, left hand, subsequent encounter for fracture with nonunion",
//     "isCompleted": false,
//     "isArchived": false,
//     "endDate": "9/6/2021",
//     "selected": false
//   }, {
//     "id" : 4,
//     "title": "Cat, tiger",
//     "descripsion": "Superficial foreign body of breast, unspecified breast, sequela",
//     "isCompleted": false,
//     "isArchived": false,
//     "endDate": "9/19/2021",
//     "selected": false
//   }, {
//     "id" : 5,
//     "title": "Dove, emerald-spotted wood",
//     "descripsion": "Accidental discharge from unspecified firearms or gun",
//     "isCompleted": false,
//     "isArchived": false,
//     "endDate": "10/6/2021",
//     "selected": false
//   }, {
//     "id" : 6,
//     "title": "White-rumped vulture",
//     "descripsion": "Anatomical narrow angle, left eye",
//     "isCompleted": false,
//     "isArchived": false,
//     "endDate": "2/28/2022",
//     "selected": false
//   }, {
//     "id" : 7,
//     "title": "Lion, steller's sea",
//     "descripsion": "Person on outside of car injured in collision with sport utility vehicle in traffic accident, initial encounter",
//     "isCompleted": false,
//     "isArchived": false,
//     "endDate": "9/13/2021",
//     "selected": false
//   }, {
//     "id" : 8,
//     "title": "Zebra, common",
//     "descripsion": "Poisoning by antirheumatics, not elsewhere classified, intentional self-harm, subsequent encounter",
//     "isCompleted": false,
//     "isArchived": false,
//     "endDate": "2/27/2022",
//     "selected": false
//   }, {
//     "id" : 9,
//     "title": "Kafue flats lechwe",
//     "descripsion": "Displaced segmental fracture of shaft of radius, left arm, subsequent encounter for closed fracture with malunion",
//     "isCompleted": false,
//     "isArchived": false,
//     "endDate": "12/23/2021",
//     "selected": false
//   }, {
//     "id" : 10,
//     "title": "Francolin, coqui",
//     "descripsion": "Frostbite with tissue necrosis of right ankle, sequela",
//     "isCompleted": false,
//     "isArchived": false,
//     "endDate": "4/1/2021",
//     "selected": false
//   }, {
//     "id" : 11,
//     "title": "Crested bunting",
//     "descripsion": "Type AB blood, Rh positive",
//     "isCompleted": false,
//     "isArchived": true,
//     "endDate": "3/16/2022",
//     "selected": false
//   }, {
//     "id" : 12,
//     "title": "Indian star tortoise",
//     "descripsion": "Other optic atrophy, unspecified eye",
//     "isCompleted": false,
//     "isArchived": true,
//     "endDate": "8/7/2021",
//     "selected": false
//   }, {
//     "id" : 13,
//     "title": "Wolf spider",
//     "descripsion": "Adverse effect of unspecified systemic anti-infective and antiparasitic, initial encounter",
//     "isCompleted": false,
//     "isArchived": false,
//     "endDate": "5/22/2021",
//     "selected": false
//   }, {
//     "id" : 14,
//     "title": "Common wombat",
//     "descripsion": "Maternal care for hydrops fetalis, unspecified trimester",
//     "isCompleted": false,
//     "isArchived": false,
//     "endDate": "5/19/2021",
//     "selected": false
//   }, {
//     "id" : 15,
//     "title": "Plover, three-banded",
//     "descripsion": "Loose body in knee",
//     "isCompleted": false,
//     "isArchived": false,
//     "endDate": "12/12/2021",
//     "selected": false
//   }];
  private todos: ITodo[] = [];
  private _todoSubject: BehaviorSubject<Array<ITodo>> = new BehaviorSubject(this.todos);
  private _singleTodoSubject: Subject<ITodo> = new BehaviorSubject(this.todos.length? this.todos[0] : null);

  constructor() { }

  public getTodos():Observable<Array<ITodo>>{
    return this._todoSubject.asObservable();
  }

  
  public getSelectedTodo():Observable<ITodo>{
    return this._singleTodoSubject.asObservable();
  }

  public setSelectedTodo(todo: ITodo){
    return this._singleTodoSubject.next(todo);
  }

  public addNewTodo(newTodo: ITodo): void{
    console.log('id ' + JSON.stringify(newTodo))

    const exitistingTodo: Array<ITodo> = this._todoSubject.value;
    exitistingTodo.push(newTodo);
    this._todoSubject.next(exitistingTodo);
  }
}
