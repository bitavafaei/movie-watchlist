import StatsBadge from "./StatsBadge";

export default function StatsSection({stats}) {
    return(
        <div>
            <h3 className="text-white text-xl sm:text-2xl font-semibold mb-4">My Statistics</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-5 mb-4">
                {stats.map((stat) =>(
                    <StatsBadge
                        key= {stat.id}
                        stat= {stat}
                    />
                ))}
            </div>
        </div>
    )
}
