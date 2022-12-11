import Image from "next/image";
import SidebarMenuItem from "./SidebarMenuItem";
import {HomeIcon} from "@heroicons/react/solid";
import {BellIcon, BookmarkIcon, ClipboardIcon, DotsCircleHorizontalIcon, DotsHorizontalIcon, HashtagIcon, InboxIcon, UserIcon} from "@heroicons/react/outline";


export default function Sidebar() {
  return (
    <div className="hidden sm:flex flex-col p-2 xl:items-start fixed h-full xl:ml-24">

        {/* Logo */}
        <div className="hoverEffect p-0 hover:bg-green-100 xl:px-1">
            <Image width= "32" height= "32" src="https://www.pngkit.com/png/full/803-8036992_png-file-svg-twitter-logo-dead-png.png "></Image>
        </div>

        {/* Menu */}

        <div className="mt-4 mb-2.5 xl:item-start">
            <SidebarMenuItem text="Home" Icon={HomeIcon} active />
            <SidebarMenuItem text="Explore" Icon={HashtagIcon} />
            <SidebarMenuItem text="Notificationse" Icon={BellIcon} />
            <SidebarMenuItem text="Messages" Icon={InboxIcon} />
            <SidebarMenuItem text="Bookmarks" Icon={BookmarkIcon} />
            <SidebarMenuItem text="Lists" Icon={ClipboardIcon} />
            <SidebarMenuItem text="Profile" Icon={UserIcon} />
            <SidebarMenuItem text="More" Icon={DotsCircleHorizontalIcon} />
        </div>


        {/* Button */}

        <button className=" bg-green-400 text-white rounded-full w-56 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline">Zweet</button>


        {/* Mini-Profile */}
        <div className="hoverEffect text-gray-700 flex items-center justify-center xl:justify-start mt-auto">
            <img src="https://miro.medium.com/fit/c/176/176/1*UmydKnSU-ikcQQs8WxrkfQ.png" alt="user-img" className="h-10 w-10 rounded-full" />

            <div className="leading-5 hidden xl:inline ">
                <h4>Shouvick Koley</h4>
                <p className="text-gray-500">@Scr3wtape</p>
            </div>
            <DotsHorizontalIcon className="h-5 xl:ml-8 hidden xl:inline"/>
        </div>

    </div>
  )
}
