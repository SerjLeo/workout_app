import { Observable } from 'rxjs'
import type { Subscriber, Subscription } from 'rxjs'
import type {AlertColor} from '@mui/material'
import {v4} from 'uuid'

export type AlertBase = {
  type: AlertColor
  message: string
}

export type Alert = AlertBase & {
  id: string
}

class AlertService {
  private alerts$: Observable<Alert> | null = null
  private observer:  Subscriber<Alert> | null = null
  private static instance: AlertService | null = null

  constructor() {
    if(AlertService.instance) return AlertService.instance
    AlertService.instance = this
    this.alerts$ = new Observable(observer => {
      this.observer = observer
    })
  }

  push(alert: AlertBase): void {
    this.observer?.next({...alert, id: v4()})
  }

  subscribe(callback: (val: Alert) => unknown): Subscription {
    return this.alerts$!.subscribe(callback)
  }
}

export default AlertService
