export type NextAppPageProps<T>={
  params:T,
  searchParams?: { [key: string]: string | string[] | undefined };
}