/**
 * @class TryCatch
 */
import * as React from "react";

export type Result={
  result:any,
  error:any
}

const withTryCatch = (WrappedComponent: any) => {
  return class extends React.Component {
    result = null;
    error = null;

    constructor(props: any) {
      super(props);
    }

    trycatch = (statement:Function,errorHandler?:Function):Result => {
      try {
        this.result = statement()
      } catch (error) {
        if(errorHandler) errorHandler(error)
        this.error = error
      } finally{
        return {result: this.result,error:this.error}
      }
    }

    trycatchAsync = async (statement:Function,errorHandler?:Function):Promise<Result> => {
      try {
        this.result = await statement()
      } catch (error) {
        if(errorHandler) errorHandler(error)
        this.error = error
      } finally{
        return {result: this.result,error:this.error}
      }
    }

    render() {
      return <WrappedComponent trycatch={this.trycatch} trycatchAsync={this.trycatchAsync} />;
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

const useTryCatchAsync = async (fn:Function,errorHandler?:Function):Promise<Result> => {
  let _result:any = null
  let _error:any = null

  const trycatch = async() => {
    try {
      _result = await fn()
    } catch (error) {
      if(errorHandler) errorHandler(error)
      _error = error
    } finally{
      return {result: _result,error: _error}
    }
  }
  return await trycatch()
}


export {withTryCatch,useTryCatch,useTryCatchAsync}