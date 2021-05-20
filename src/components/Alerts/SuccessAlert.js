import React from 'react'
import { Snackbar } from '@material-ui/core'
import { Alert } from '@material-ui/lab'
import { useSelector } from 'react-redux'

export const SuccessAlert = () => {
  const appState = useSelector((state) => state.applicationState)
  return (
    <Snackbar
      open={appState.successAlertIsOpen}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
    >
      <Alert variant="filled" severity="success">
        {appState.successAlertText}
      </Alert>
    </Snackbar>
  )
}
