import { SearchIcon } from "lucide-react"
import { Button } from "./components/ui/button"
import { Input } from "./components/ui/input"
import Header from "./header"

import ServerDateGreeting from "./date-greeting"
import Image from "next/image"

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
      </div>
    </div>
  )
}

export default Home
