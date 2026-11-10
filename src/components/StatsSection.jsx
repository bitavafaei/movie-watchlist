import StatsBadge from "./StatsBadge";

export default function StatsSection({stats}) {
    return(
        <div>
            <h3 className="text-white text-2xl font-semibold mb-4">My Statistics</h3>
            <div className="grid grid-cols-3 gap-5 mb-4">
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
