import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
const MobileNav = () => {
  return (
    <div className='md:hidden'>
      <Sheet>
  <SheetTrigger>Menu</SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Are you sure absolutely sure?</SheetTitle>
      <SheetDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>

    </div>
  )
}

export default MobileNav
