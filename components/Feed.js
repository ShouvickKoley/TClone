import { SparklesIcon } from "@heroicons/react/outline";
import Input from "./Input";
import Post from "./Post";

export default function Feed() {
    const post =[
        {
            id: "1",
            name: "Shouvick Koley",
            username:"Scr3wtape",
            userImg: "https://miro.medium.com/fit/c/176/176/1*UmydKnSU-ikcQQs8WxrkfQ.png",
            img: "https://images.unsplash.com/photo-1635396259299-2eb9a880075a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8RG9vbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
            text:"The time has come",
            timestamp: "2 hours ago"
        },
        {
            id: "2",
            name: "Shouvick Koley",
            username:"Scr3wtape",
            userImg: "https://miro.medium.com/fit/c/176/176/1*UmydKnSU-ikcQQs8WxrkfQ.png",
            img: "https://images.unsplash.com/photo-1609057339730-79faac0a5e3c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHR3aXR0ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
            text:"Is anyone out there?!",
            timestamp: "3 days ago"
        },
    ]
  return (
    <div className="xl:ml-[370px] border-l border-r border-gray-200 xl:min-w-[570px] sm:ml-[73px] flex-grow max-w-xl">
        <div className="flex py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200">
            <h2 className="text-lg sm:text-xl font-bold cursor-pointer">Home</h2>
            <div className="hoverEffect flex items-center justify-center px-0 ml-auto w-9 h-9">
                <SparklesIcon className="h-5"/>

            </div>
        </div>
        <Input />
        {post.map((post)=>(
            <Post key={post.id} post={post} />
        ))}
    </div>
  )
}
