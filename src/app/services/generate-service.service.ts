import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class GenerateServiceService {

  constructor() { }

  // static pageKey() {
  //   return Number(moment().format('YYYYMMDDHHmmss'))
  // }

  // static sum(data: Array<any>, field: string) {
  //   return data.reduce((a, b) => a + Number(b[field]), 0)
  // }

}

export function pageKey() {
  return Number(moment().format('YYYYMMDDHHmmss'))
}


export function sum(data: Array<any>, field: string) {
  return data.reduce((a, b) => a + Number(b[field]), 0)
}
