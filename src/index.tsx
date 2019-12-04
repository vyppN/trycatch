/**
 * @class TryCatch
 */
import * as React from "react";

export type Result<T> = {result:T,error:Error}

const withTryCatch = (WrappedComponent: any) => {
  return class extends React.Component {
    result:any = null;
    error:any = null;

    constructor(props: any) {
      super(props);
    }

    trycatch<T>(fn:()=>T,errorHandler:(error:Error)=>void = error => null):Result<T>{
      try {
        this.result = fn()
      } catch (error) {
        this.error = error
        if(errorHandler) errorHandler(error)
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