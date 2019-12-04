import {useTryCatch, withTryCatch, useTryCatchAsync} from './'


describe('TryCatch is Thruthy', () => {
  it('withTryCatch is truthy', () => {
    expect(withTryCatch).toBeTruthy()
  })
  it('useTryCatch is truthy',()=>{
    expect(useTryCatch).toBeTruthy()
  })
  it('useTryCatchAsync is truthy',()=>{
    expect(useTryCatchAsync).toBeTruthy()
  })
})


describe('TryCatchAsync returns promise', () => {
  it('useTryCatchAsync returns promise',()=>{
    expect(useTryCatchAsync(()=>{})).toBeInstanceOf(Promise)
  })
  it('useTryCatch is not return promise',()=>{
    expect(useTryCatch(()=>{})).not.toBeInstanceOf(Promise)
  })
})