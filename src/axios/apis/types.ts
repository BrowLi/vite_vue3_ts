export interface ILoginParams {
  userName: string
  passWord: string | number
}
export interface ITips {
  q: string
}

export interface ILoginApi {
  login: (params: ILoginParams) => Promise<any>
}

export interface ISearchTips {
  tips: (params: ITips) => Promise<any>
}
