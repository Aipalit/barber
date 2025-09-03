export default function ServerDateGreeting() {
  const currentDate = new Date()

  // Formatar data em BR (lado do servidor)
  const formattedDate = currentDate.toLocaleDateString("pt-BR", {
    weekday: "long",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  })

  // Saudação baseada no horário
  const getServerGreeting = () => {
    const hour = currentDate.getHours()
    if (hour >= 5 && hour < 12) return "Bom dia"
    if (hour >= 12 && hour < 18) return "Boa tarde"
    return "Boa noite"
  }

  // Capitalizar primeira letra
  const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  const [weekday, date] = formattedDate.split(",")

  return (
    <div className="space-y-2 text-center">
      {/* Saudação  */}
      <h1 className="text-2xl font-light text-gray-800 md:text-3xl dark:text-gray-200">
        {getServerGreeting()}, User!
      </h1>
      {/* Data do Servidor */}
      <div className="text-lg text-gray-600 md:text-xl dark:text-gray-400">
        <span className="font-medium">
          {capitalizeFirstLetter(weekday.trim())}
        </span>
        <span className="mx-2">•</span>
        <span>{date.trim()}</span>
      </div>
      <div></div>
    </div>
  )
}
