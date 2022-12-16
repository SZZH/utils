export const generateUniqueId = () => (Date.now() + (Math.random() * 10 ** 17)).toString(16)

export const isPipeError = (pipeItem) => {
  let errorMessage = ''
  if (!pipeItem || typeof pipeItem !== 'function') errorMessage = '管道项必须为一个函数'

  if (errorMessage.length > 0) {
    console.error(errorMessage)
    return true
  }
  return false
}

export const isEnd = (pointer, pipe, pipeItem) => {
  return !pipeItem && pointer > pipe.length - 1
}
