export default function StatsBadge({stat}) {
    const Icon = stat.icon
    return(
        <div className="bg-[#202C3C] py-3 sm:py-5 flex flex-col items-center rounded-xl gap-1">
            <Icon className={`${stat.color} w-5 h-5 sm:h-6 sm:w-6`}/>
            <h2 className="text-white text-base sm:text-xl font-semibold">{stat.value}</h2>
            <h4 className="text-slate-300 text-sm sm:text-base text-center">{stat.label}</h4>
        </div>
    )
}
