import { Injectable } from '@angular/core';

import { UAParser } from 'ua-parser-js';

@Injectable({
  providedIn: 'root'
})
export class UserAgentService {
  private readonly userAgent: UAParser = new UAParser();


  constructor() {}


  getBrowser(): object {
    return this.userAgent.getBrowser();
  }

  isInternetExplorer(): boolean {
    const {name: browserName} = this.userAgent.getBrowser();

    return browserName === 'IE' || browserName === 'ie' || browserName === 'Internet Explorer';
  }
}
