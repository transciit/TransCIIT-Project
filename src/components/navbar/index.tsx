import { useUser } from "@clerk/nextjs";

import BottomNavBar from "@/components/navbar/BottomNavBar";
// import MobileTopBar from './MobileTopBar';
// import NotificationBar from './NotificationBar';
import TopNavBar from "@/components/navbar/TopNavBar";

import Banner from "./Banner";

interface Props {
  currentTab: string;
}

export default function NavBar({ currentTab }: Props) {
  const { user } = useUser();
  return (
    <div className="relative">
      <div className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-20">
        <div className="h-56 bg-gradient-to-br from-purple-100 to-purple-100 blur-[106px]"></div>
        <div className="h-32 bg-gradient-to-r from-cyan-500 to-sky-300 blur-[106px] "></div>
      </div>
      {/* <MobileTopBar /> */}
      {!user && <Banner />}
      {user && <TopNavBar currentTab={currentTab} />}
      <BottomNavBar currentTab={currentTab} />
      {/* <NotificationBar /> */}
    </div>
  );
}
