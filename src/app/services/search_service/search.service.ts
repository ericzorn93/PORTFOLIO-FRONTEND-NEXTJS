import { Injectable } from '@angular/core';

import * as uuid from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor() { }

  async searchAllPlayers(searchTerm: string): Promise<object[]> {
    const allPlayers = [
      { id: uuid.v4(), name: 'Eli Manning' },
      { id: uuid.v4(), name: 'Lebron James' },
    ];

    return allPlayers;
  }
}
