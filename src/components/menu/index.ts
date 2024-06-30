export interface MenuInterface {
    title: string
    path: string
    icon: string
    children?: MenuInterface[]
    top?: boolean   // 顶级分组? 顶级分组不需要path icon
}