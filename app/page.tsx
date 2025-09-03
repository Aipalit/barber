import { SearchIcon } from "lucide-react"
import { Button } from "./components/ui/button"
import { Input } from "./components/ui/input"
import Header from "./components/header"

import ServerDateGreeting from "./date-greeting"
import Image from "next/image"
import { Card, CardContent } from "./components/ui/card"
import { Badge } from "./components/ui/badge"
import { Avatar, AvatarImage } from "./components/ui/avatar"

const Home = () => {
  return (
    <div>
      <Header></Header>
      <div className="p-5">
        <h2>
          <ServerDateGreeting></ServerDateGreeting>
        </h2>

        <div className="mt-4 flex items-center gap-2">
          <Input placeholder="Nome do Barbearia ou Salão"></Input>
          <Button size={"icon"} variant="outline">
            <SearchIcon></SearchIcon>
          </Button>
        </div>

        <div className="relative mt-6 h-[150px] w-full">
          <Image
            alt="Agenda Agora"
            src="/Banner_01.png"
            fill
            className="cover rounded-xl"
          ></Image>
        </div>
        <Card className="mt-6 p-2">
          <CardContent className="flex justify-between p-0">
            <div className="flex flex-col gap-2 py-5 pl-5">
              <Badge className="w-fit">Status</Badge>
              <p className="font-semibold">Corte</p>
              <div className="flex items-center gap-2">
                <Avatar className="h-9 w-9">
                  <AvatarImage
                    src={
                      "https://assetsio.gnwcdn.com/pokemon_go_ditto_disguises.png?width=1600&height=900&fit=crop&quality=100&format=png&enable=upscale&auto=webp"
                    }
                  ></AvatarImage>
                </Avatar>
                <h3 className="text-sm font-semibold">Barber</h3>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-2 border-l-2 border-solid px-5">
              <p className="text-sm">02</p>
              <p className="text-2xl">Setembro</p>
              <p className="text-sm">00:00</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Home
