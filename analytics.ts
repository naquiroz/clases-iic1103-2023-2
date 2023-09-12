
type ExtendedImportMeta = ImportMeta & {
  env: {
    NODE_ENV: string
  }
}


export default function isProduction() {
  //@ts-nochec
  const { NODE_ENV } = (import.meta as ExtendedImportMeta).env;

  const isProduction = NODE_ENV === 'production';
  return isProduction;
}