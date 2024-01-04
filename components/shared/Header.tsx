import { SignIn, SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import { Button } from "../ui/button"
import Link from "next/link"
import MobileNav from "./mobile/Mobilenav"

const Header = () => {
  return (
    <div className="w-full h-24 bg-gray-50 flex items-center justify-around">
     <div className="w-24 h-16  flex items-center justify-center">
      <h2>EventSync</h2>
     </div>
     <div className="md:flex items-center justify-center hidden gap-10 ">
      <p className="text-black">Home</p>
      <p className="text-gray-500">About</p>
      <p className="text-gray-500">Explore Events</p>
      <p className="text-gray-500">Organize</p>
    
     </div>
     <div className="w-28 h-16  flex items-center justify-center gap-5">
      <SignedIn>
        <UserButton afterSignOutUrl="/" />
      </SignedIn>
      <SignedOut>
        <Button className="rounded-full" size="lg">
          <Link href="/sign-in">
            Login
          </Link>
        </Button>
      </SignedOut>
      <MobileNav/>
     </div>
    
    </div>
  )
}

export default Header
