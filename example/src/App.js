import React, { Component } from 'react'

import {withTryCatch, useTryCatch} from 'trycatch'


  const test = () => {
    eval("alert('Hello)")
    // return 'TESTNA'
  }

  const errorHandler = error => {
    console.error(error)
  }

// class App extends Component {


//   render () {
//     let {result,error} = this.props.trycatch(this.test)
//     console.log('RES',result,'ERR',error)
//     return (
//       <div>
//         TEST
//       </div>
//     )
//   }
// }

// export default withTryCatch(App)


export default () => {
  const {result,error} = useTryCatch(test)
  console.log('RES',result,'ERR',error)
  return <div>TEST HOOK: {result}, {error && error.message}</div>
}