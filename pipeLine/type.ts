import PipeContext from './pipeContext'

export type PipeList = Array<(pipeContext: PipeContext) => Promise<PipeContext>>
