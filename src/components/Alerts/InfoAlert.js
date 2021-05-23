import React from 'react'
import { Snackbar } from '@material-ui/core'
import { Alert } from '@material-ui/lab'
import { useSelector } from 'react-redux'

export const InfoAlert = () => {
  const appState = useSelector((state) => state.applicationState)
  return (
    <Snackbar
      open={appState.infoAlertIsOpen}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
    >
      <Alert variant="filled" severity="info">
        {appState.infoAlertText}
      </Alert>
    </Snackbar>
  )
}
