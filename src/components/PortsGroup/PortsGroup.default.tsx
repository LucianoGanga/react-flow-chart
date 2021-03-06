import * as React from 'react'
import { IConfig } from '../../'
import { makeStyles } from '@material-ui/styles'
import clsx from 'clsx'

export interface IPortsGroupDefaultProps {
  children: JSX.Element | JSX.Element[]
  config: IConfig
  side: 'top' | 'bottom' | 'left' | 'right'
}

const useStyles = makeStyles({
  root: {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center'
  },
  top: {
    width: '100%',
    left: '0',
    top: '-12px',
    flexDirection: 'row',
    '& > div': {
      margin: '0 3px'
    }
  },
  bottom: {
    width: '100%',
    left: '0',
    bottom: '-12px',
    flexDirection: 'row',
    '& > div': {
      margin: '0 3px'
    }
  },
  left: {
    height: '100%',
    top: '0',
    left: '-12px',
    flexDirection: 'column',
    '& > div': {
      margin: '3px 0'
    }
  },
  right: {
    height: '100%',
    top: '0',
    right: '-12px',
    flexDirection: 'column',
    '& > div': {
      margin: '3px 0'
    }
  }
})

export const PortsGroupDefault = ({
  side = 'right',
  children
}: IPortsGroupDefaultProps) => {
  const classes = useStyles()
  return (
    <div
      className={clsx(
        classes.root,
        classes[
          ['top', 'bottom', 'left', 'right'].includes(side) ? side : 'right'
        ]
      )}
    >
      {children}
    </div>
  )
}
