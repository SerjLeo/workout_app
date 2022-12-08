import React, {useEffect, useState} from 'react';
import {Alert as MIUiAlert} from '@mui/material';
import AlertService from '../../utils/Alerts';
import type {Alert} from '../../utils/Alerts';
import styles from './Alert.module.scss'

const Alerts = () => {
  const [alerts, setAlerts] = useState<Alert[]>([])

  useEffect(() => {
    const alertService = new AlertService()
    const subscription = alertService.subscribe(alert => {
      setAlerts((prevState) => [...prevState, alert])
      setTimeout(() => { handleClose(alert.id) }, 5000)
    })

    return () => {
      subscription.unsubscribe()
    }
  }, [])

  const handleClose = (id: string) => {
    setAlerts(prevState => prevState.filter(alert => alert.id !== id))
  }

  return (
    <div className={styles.alertsWrap}>
      {alerts.map(alert => <MIUiAlert key={alert.id} onClose={() => handleClose(alert.id)} severity={alert.type} sx={{ width: '100%' }}>
        {alert.message}
      </MIUiAlert>)}
    </div>
  );
};

export default Alerts;
