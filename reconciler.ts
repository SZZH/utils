class ReconcilerContext {
  private callback: any[] = []
  pushCallback(callback, ...rest) {
    this.callback.push(callback?.bind?.(this.callback, ...rest))
  }
  popCallback() {
    const callback = this.callback.shift()
    callback?.()
  }
}

const reconciler = new ReconcilerContext()

export default reconciler