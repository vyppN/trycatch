/**
 * @class TryCatch
 */
import * as React from "react";

const withTryCatch = (WrappedComponent: any) => {
  return class extends React.Component {
    result = null;
    error = null;

    constructor(props: any) {
      super(props);
    }

    trycatch = (statement:Function,errorHandler?:Function) => {
      try {
        this.result = statement()
      } catch (error) {
        if(errorHandler) errorHandler(error)
        this.error = error
      } finally{
        return {result: this.result,error:this.error}
      }
    }

    render() {
      return <WrappedComponent trycatch={this.trycatch} />;
    }
  }
};

const useTryCatch = (statement:Function,errorHandler?:Function) => {
  let _result:any = null
  let _error:any = null

  const trycatch = () => {
    try {
      _result = statement()
    } catch (error) {
      if(errorHandler) errorHandler(error)
      _error = error
    } finally{
      return {result: _result,error: _error}
    }
  }
  return trycatch()
}


export {withTryCatch,useTryCatch}