import React from 'react'
import {connect} from 'react-redux'
import {makeStyles} from '@material-ui/core/styles'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import AccountBalanceIcon from '@material-ui/icons/AccountBalance'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import PlayListAddIcon from '@material-ui/icons/PlaylistAdd'
import DataSource from './DataSource'
import { fade } from '@material-ui/core/styles/colorManipulator'
import { addDataSource } from '../../store/data-source'
import Fab from '@material-ui/core/Fab'

const useStyles = makeStyles(theme => ({
  panel: {
    backgroundColor: fade('#fff', 0.9)
  },
  heading: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontSize: theme.typography.pxToRem(20),
  },
  details: {
    maxWidth: 800,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 20
  },
  button: {
    margin: theme.spacing(1)
  },
  leftIcon: {
    marginRight: theme.spacing(1),
  }
}))

const DataSourcePanel = (props) => {
  const classes = useStyles()
  return (
    <ExpansionPanel defaultExpanded className={classes.panel}>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon/>}
        aria-controls='panel1c-content'
      >
        <div className={classes.heading}>
          <AccountBalanceIcon/><Typography  style={{paddingLeft: 8}}>Banks</Typography>
        </div>
      </ExpansionPanelSummary>
      { props.dataSources.length > 0 &&
        <div className={classes.details}>
          {props.dataSources.map((dataSource, index) => <DataSource key={index} dataSource={dataSource} index={index}/>)}
        </div>
      }
      <Divider/>
      <ExpansionPanelActions>
        <Fab variant='extended' size='medium' color='primary' className={classes.button} onClick={props.addDataSource}>
          <PlayListAddIcon className={classes.leftIcon}/>
          Add
        </Fab>
      </ExpansionPanelActions>
    </ExpansionPanel>
  )
}

const mapStateToProps = state => ({
  dataSources: state.dataSources
})

const mapDispatchToProps = { addDataSource }

export default connect(mapStateToProps, mapDispatchToProps)(DataSourcePanel)
