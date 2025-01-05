export default function FeaturedGames() {
  const games = [
    {
      title: "Truth or Drink",
      description: "Answer truthfully or take a drink!",
      link: "/play?game=truth-or-drink",
      gradient: "from-purple-500/10 to-pink-500/10",
      hoverGradient: "from-purple-500/20 to-pink-500/20"
    },
    {
      title: "Never Have I Ever",
      description: "Classic drinking game with a twist!",
      link: "/play?game=never-have-i-ever",
      gradient: "from-blue-500/10 to-indigo-500/10",
      hoverGradient: "from-blue-500/20 to-indigo-500/20"
    },
    {
      title: "Most Likely To",
      description: "Vote and drink!",
      link: "/play?game=most-likely-to",
      gradient: "from-teal-500/10 to-emerald-500/10",
      hoverGradient: "from-teal-500/20 to-emerald-500/20"
    }
  ]

  return (
    <div className="py-16">
      <h2 className="text-3xl font-bold text-center mb-12 text-white/90">Featured Games</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {games.map((game) => (
          <div
            key={game.title}
            className={`
              rounded-xl p-6 cursor-pointer transition-all duration-300
              bg-gradient-to-br ${game.gradient}
              hover:bg-gradient-to-br ${game.hoverGradient}
              border border-gray-800/50 hover:border-gray-700/50
              backdrop-blur-sm
            `}
          >
            <h3 className="text-xl font-bold mb-2 text-white/90">{game.title}</h3>
            <p className="text-gray-400">{game.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
} 