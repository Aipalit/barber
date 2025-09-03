import Image from "next/image"
import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"
import { MenuIcon } from "lucide-react"

const Header = () => {
  return (
    <div>
      <Card>
        <CardContent className="flex items-center justify-between">
          <Image
            alt="Style Barber"
            src="/Logo.png"
            width={130}
            height={22}
          ></Image>
          <Button size="icon" variant="outline">
            <MenuIcon></MenuIcon>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

export default Header
