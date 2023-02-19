import type { ConfigFile } from '@rtk-query/codegen-openapi'

const config: ConfigFile = {
  schemaFile: '../server/swagger.json',
  apiFile: './src/store/baseApi.ts',
  apiImport: 'baseApi',
  outputFiles: {
    './src/store/api/user.ts': {
      filterEndpoints: [/user/i],
    },
  },
  hooks: true,
}

export default config
