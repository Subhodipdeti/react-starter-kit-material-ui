import { required } from '../utils'
import pkg from '../../package.json'

type Endpoint = {
  https: string
}

class Config {
  version: string
  endpoints: Endpoint

  constructor(env: NodeJS.ProcessEnv) {
    this.version = pkg.version
    this.endpoints = {
      https: required<string>(env.REACT_APP_ENDPOINT_HTTPS),
    }
  }
}

export { Config as default }