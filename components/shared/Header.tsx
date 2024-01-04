import { SignedOut } from "@clerk/nextjs"
import { Button } from "../ui/button"
import Link from "next/link"

const Header = () => {
  return (
    <div className="w-full h-24 bg-fuchsia-700 flex items-center justify-around">
     <div className="w-1/3 h-16 bg-white"></div>
     <div className="w-1/3 h-16 bg-white flex items-center justify-end">
      <SignedOut>
        <Button className="rounded-full" size="lg">
          <Link href="/sign-in">
            Login
          </Link>
        </Button>
      </SignedOut>
     </div>
    </div>
  )
}

export default Header
