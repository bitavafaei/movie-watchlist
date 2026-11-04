export default function StatsBadge({stat}) {
    const Icon = stat.icon
    return(
        <div className="bg-[#26364B] px-10 py-5 flex flex-col items-center">
            <Icon className={stat.color}/>
            <h2>{stat.value}</h2>
            <h4>{stat.label}</h4>
        </div>
    )
}
