import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { ITodo } from '../models/todo.interface';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
private mock =  [
  {
    "title": "Caracara, yellow-headed",
    "descripsion": "Laceration without foreign body of abdominal wall, left upper quadrant with penetration into peritoneal cavity",
    "isComplated": false,
    "isArchived": false,
    "endDate": "5/28/2021"
  },
   {
    "title": "Cat, civet",
    "descripsion": "Other physeal fracture of unspecified metatarsal, initial encounter for open fracture",
    "isComplated": true,
    "isArchived": false,
    "endDate": "8/6/2021"
  }, {
    "title": "Caiman, spectacled",
    "descripsion": "Nondisplaced fracture of base of third metacarpal bone, left hand, subsequent encounter for fracture with nonunion",
    "isComplated": true,
    "isArchived": false,
    "endDate": "9/6/2021"
  }, {
    "title": "Cat, tiger",
    "descripsion": "Superficial foreign body of breast, unspecified breast, sequela",
    "isComplated": true,
    "isArchived": false,
    "endDate": "9/19/2021"
  }, {
    "title": "Dove, emerald-spotted wood",
    "descripsion": "Accidental discharge from unspecified firearms or gun",
    "isComplated": true,
    "isArchived": false,
    "endDate": "10/6/2021"
  }, {
    "title": "White-rumped vulture",
    "descripsion": "Anatomical narrow angle, left eye",
    "isComplated": false,
    "isArchived": false,
    "endDate": "2/28/2022"
  }, {
    "title": "Lion, steller's sea",
    "descripsion": "Person on outside of car injured in collision with sport utility vehicle in traffic accident, initial encounter",
    "isComplated": true,
    "isArchived": false,
    "endDate": "9/13/2021"
  }, {
    "title": "Zebra, common",
    "descripsion": "Poisoning by antirheumatics, not elsewhere classified, intentional self-harm, subsequent encounter",
    "isComplated": false,
    "isArchived": false,
    "endDate": "2/27/2022"
  }, {
    "title": "Kafue flats lechwe",
    "descripsion": "Displaced segmental fracture of shaft of radius, left arm, subsequent encounter for closed fracture with malunion",
    "isComplated": false,
    "isArchived": false,
    "endDate": "12/23/2021"
  }, {
    "title": "Francolin, coqui",
    "descripsion": "Frostbite with tissue necrosis of right ankle, sequela",
    "isComplated": false,
    "isArchived": false,
    "endDate": "4/1/2021"
  }, {
    "title": "Crested bunting",
    "descripsion": "Type AB blood, Rh positive",
    "isComplated": false,
    "isArchived": true,
    "endDate": "3/16/2022"
  }, {
    "title": "Indian star tortoise",
    "descripsion": "Other optic atrophy, unspecified eye",
    "isComplated": false,
    "isArchived": true,
    "endDate": "8/7/2021"
  }, {
    "title": "Wolf spider",
    "descripsion": "Adverse effect of unspecified systemic anti-infective and antiparasitic, initial encounter",
    "isComplated": false,
    "isArchived": false,
    "endDate": "5/22/2021"
  }, {
    "title": "Common wombat",
    "descripsion": "Maternal care for hydrops fetalis, unspecified trimester",
    "isComplated": false,
    "isArchived": false,
    "endDate": "5/19/2021"
  }, {
    "title": "Plover, three-banded",
    "descripsion": "Loose body in knee",
    "isComplated": true,
    "isArchived": false,
    "endDate": "12/12/2021"
  }];

  private _todoSubject: BehaviorSubject<Array<ITodo>> = new BehaviorSubject(this.mock);

  constructor() { }

  public getTodos():Observable<Array<ITodo>>{
    return this._todoSubject.asObservable();
  }
}
