import { Injectable } from '@angular/core';
import * as uuid from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  constructor() {}

  searchAllPlayers = async (): Promise<object[]> => {
    const allPlayers: object[] = [
      {id: uuid.v4(), name: 'Eli Manning'},
      {id: uuid.v4(), name: 'Lebron James'}
    ];

    return allPlayers;
  }
}
