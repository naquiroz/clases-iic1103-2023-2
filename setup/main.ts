import { defineAppSetup } from '@slidev/types'

import { inject } from '@vercel/analytics';

type ExtendedImportMeta = ImportMeta & {
  env: {
    NODE_ENV: string
  }
}

export default defineAppSetup(({ app, router }) => {
  //@ts-nocheck
  const { NODE_ENV } = (import.meta as ExtendedImportMeta).env;

  const isProduction = NODE_ENV === 'production';
  inject({
      mode: isProduction ? 'production' : 'development',
      debug: !isProduction,
    });
})