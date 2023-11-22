// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ApiMethodParameters<T extends (params: any) => unknown> =
  Parameters<T>[0];
