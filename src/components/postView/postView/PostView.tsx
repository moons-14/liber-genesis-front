import { Avatar } from "@/components/element"
import { MoreHorizontal } from "lucide-react"

export const PostView: React.FC<{}> = () => {
    return (<div className="flex px-4 py-3 border-blue-500 border">
        <div className="w-12">
            <Avatar
                src="https://moons14.com/icon.png"
                name="string"
            />
        </div>
        <div className="flex-1 pl-3">
            <div className="flex gap-1 text-[#536471] h-5 items-center">
                <div className="font-bold text-black flex-1">moons14.eth</div>
                <div className="">3 hours</div>
                <div className="w-7"><MoreHorizontal size={24}/></div>
            </div>
        </div>
    </div>)
}