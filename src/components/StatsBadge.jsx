export default function StatsBadge({stat}) {
    const Icon = stat.icon
    return(
        <div className="bg-[#202C3C] py-5 flex flex-col items-center rounded-xl gap-1">
            <Icon className={stat.color}/>
            <h2 className="text-white">{stat.value}</h2>
            <h4 className="text-slate-300">{stat.label}</h4>
        </div>
    )
}
