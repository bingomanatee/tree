import React, { PureComponent } from 'react'
import _ from 'lodash'
import Unchecked from './Unchecked'
import Checked from './Checked'

export default class Checkbox extends PureComponent {

  constructor(props) {
    super(props)
    this.state = {
      checked: _.get(props, 'checked')
    }
    this.check = this.check.bind(this)
    this.uncheck = this.uncheck.bind(this)
    this.notify = this.notify.bind(this)
  }

  uncheck() {
    this.setState({ checked: false }, this.notify)
  }

  check() {
    this.setState({ checked: true }, this.notify)
  }

  notify() {
    if (this.props.onChange) {
      this.props.onChange({
        target: {
          value: this.state.checked,
          checked: this.state.checked
        }
      })
    }
  }

  render() {
    return this.state.checked ? <Checked onClick={this.uncheck}/> : <Unchecked onClick={this.check}/>
  }

}
