import React, { Component, useState } from 'react'

import {withTryCatch, useTryCatch,useTryCatchAsync} from 'trycatch'


  const test = () => {
    // eval("alert('Hello)")
    return 'TEST'
  }

  const errorHandler = error => {
    console.error(error)
  }

class App extends Component {

  testMe = async () => {
    const {result,error} = await this.props.trycatchAsync(test)
    console.log('RES',result,'ERR',error)
  }

  render () {
    this.testMe()
    return (
      <div>
        TEST
      </div>
    )
  }
}

export default withTryCatch(App)