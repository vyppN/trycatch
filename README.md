# trycatch

> Make try/catch invisible

[![NPM](https://img.shields.io/npm/v/trycatch.svg)](https://www.npmjs.com/package/trycatch) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @vyppn/trycatch
```
OR
```bash
yarn add @vyppn/trycatch
```

## Usage

HOC style
```tsx
import * as React from 'react'

import {withTryCatch} from 'trycatch'

class App extends React.Component {

  // for try-catch statement:
  // try{
  //  let result someThrowable()
  // }catch(error){
      let theError = error
  //  someErrorHandler(error)
  // }
  //
  // Can rewrite like this
  
  const {result,error} = this.props.try(someThrowable,someErrorHadler)

  // Or without error handler
  
  const {result,error} = this.props.try(someThrowable)
  
  // Or with void method and no error handling
  
  const {error} = this.porps.try(someThrowable)

  render () {
    return (
      <App />
    )
  }
}

export default withTryCatch(App)
```

## License

MIT © [vyppN](https://github.com/vyppN)
