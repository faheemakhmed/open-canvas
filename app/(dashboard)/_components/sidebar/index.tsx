import { List } from "./list"
import { NewButton } from "./new-button"

export const Sidebar =() =>{
    return (
        <aside className="fixed z-1 left-0 bg-blue-400 h-full w-28 flex p-3 flex-col gap-y-4  ">
            < NewButton />
            <List/>
        </aside>
    )
}
