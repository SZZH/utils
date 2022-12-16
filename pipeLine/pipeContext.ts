import { generateUniqueId } from './utils'

class Context {
  constructor(pageId) {
    this.pageId = pageId
  }
  state: any = {}
  readonly pageId: string = ''
}

class PipeContext extends Context {
  constructor(pipeState = {}) {
    super(generateUniqueId())
    this.state = {
      ...(pipeState ?? {}),
    }
  }

  getState(key: string) {
    if (!key) return this.state
    return this.state[key]
  }

  setState(key, value) {
    this.state[key] = value
  }
}

export default PipeContext