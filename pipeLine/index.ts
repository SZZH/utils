import PipeContext from './pipeContext'
import { PipeList } from './type'
import { isEnd, isPipeError } from './utils'

const pipe = (pipeList: PipeList, pipeState = {}) => new Promise((resolve, reject) => {
  const pipeContext = new PipeContext(pipeState)
  let pointer = 0

  const actuator = (pipeItem) => {
    if (isEnd(pointer, pipe, pipeItem)) {
      resolve(pipeContext)
      return
    }
    if (isPipeError(pipeItem)) {
      reject()
      return
    }
    const promise = pipeItem(pipeContext)

    if (!promise.then || !promise.catch) {
      console.error('管道项必须返回一个 promise')
      reject()
      return
    }

    promise.then(() => {
        actuator(pipeList[pointer++])
      })
      .catch((err) => {
        reject(err)
      })
  }
  actuator(pipeList[pointer++])
})

export default pipe