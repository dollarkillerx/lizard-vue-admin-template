export interface MenuInterface {
    title: string
    path?: string
    icon?: string
    children?: MenuInterface[]
}
// 第一层 为主要 不会跳转