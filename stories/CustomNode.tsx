import * as React from 'react'
import { FlowChartWithState, INodeDefaultProps } from '../src'
import { Page } from './components'
import { chartSimple } from './misc/exampleChartState'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
  darkBox: {
    position: 'absolute',
    padding: '20px',
    background: '#3e3e3e',
    color: 'white',
    borderRadius: '10px'
  },
  circle: {
    position: 'absolute',
    width: '110px',
    height: '110px',
    padding: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#d30000',
    color: 'white',
    borderRadius: '50%'
  }
})

const DarkBox = React.forwardRef(
  ({ children, className, ...props }: any, ref: React.Ref<any>) => {
    const classes = useStyles()
    return (
      <div className={clsx(className, classes.darkBox)} {...props} ref={ref}>
        {children}
      </div>
    )
  }
)

const Circle = React.forwardRef(
  ({ children, className, ...props }: any, ref: React.Ref<any>) => {
    const classes = useStyles()
    return (
      <div className={clsx(className, classes.circle)} {...props} ref={ref}>
        {children}
      </div>
    )
  }
)

/**
 * Create the custom component,
 * Make sure it has the same prop signature
 * You'll need to add {...otherProps} so the event listeners are added to your component
 */
const NodeCustom = React.forwardRef(
  (
    { node, children, ...otherProps }: INodeDefaultProps,
    ref: React.Ref<HTMLDivElement>
  ) => {
    if (node.type === 'output-only') {
      return (
        <DarkBox ref={ref} {...otherProps}>
          {children}
        </DarkBox>
      )
    } else {
      return (
        <Circle ref={ref} {...otherProps}>
          {children}
        </Circle>
      )
    }
  }
)

export const CustomNodeDemo = () => {
  return (
    <Page>
      <FlowChartWithState
        initialValue={chartSimple}
        Components={{
          Node: NodeCustom
        }}
      />
    </Page>
  )
}
