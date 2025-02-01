import { IconType } from "react-icons/lib"
import CountUp from 'react-countup'

type CardComponent = {
    title: string, 
    count: number,
    icon: IconType,
    color?: "rose" | "emerald" | "blue" | "purple" | "orange" | "slate"
}

const Card = ({title, count, icon, color = "slate"} : CardComponent) => {
    const Icon = icon

    if(color === "rose") {
        return (
            <div className={`px-4 py-5 rounded-lg border-rose-300 shadow-xl border flex flex-col gap-5 bg-rose-100`}>
                <h1 className={`text-sm text-rose-500`}>{title}</h1>
                <div className={`flex items-center justify-start gap-5`}>
                    <div className={`bg-rose-50 p-3 rounded-full`}>
                        <Icon size={24} className={`text-rose-400`} />
                    </div>
                    <CountUp start={0} end={count} duration={2} className={`font-bold text-3xl text-rose-400`} />
                </div>
            </div>
        )
    }
    else if(color === "blue") {
        return (
            <div className={`px-4 py-5 rounded-lg border-blue-300 shadow-xl border flex flex-col gap-5 bg-blue-300`}>
                <h1 className={`text-sm text-blue-50`}>{title}</h1>
                <div className={`flex items-center justify-start gap-5`}>
                    <div className={`bg-blue-50 p-3 rounded-full`}>
                        <Icon size={24} className={`text-blue-500`} />
                    </div>
                    <CountUp start={0} end={count} duration={2} className={`font-bold text-3xl text-blue-500`} />
                </div>
            </div>
        )
    }
    else if(color === "emerald") {
        return (
            <div className={`px-4 py-5 rounded-lg border-emerald-300 shadow-xl border flex flex-col gap-5 bg-emerald-100`}>
                <h1 className={`text-sm text-emerald-500`}>{title}</h1>
                <div className={`flex items-center justify-start gap-5`}>
                    <div className={`bg-emerald-50 p-3 rounded-full`}>
                        <Icon size={24} className={`text-emerald-400`} />
                    </div>
                    <CountUp start={0} end={count} duration={2} className={`font-bold text-3xl text-emerald-400`} />
                </div>
            </div>
        )
    }
    else if(color === "orange") {
        return (
            <div className={`px-4 py-5 rounded-lg border-orange-300 shadow-xl border flex flex-col gap-5 bg-orange-100`}>
                <h1 className={`text-sm text-orange-500`}>{title}</h1>
                <div className={`flex items-center justify-start gap-5`}>
                    <div className={`bg-orange-50 p-3 rounded-full`}>
                        <Icon size={24} className={`text-orange-400`} />
                    </div>
                    <CountUp start={0} end={count} duration={2} className={`font-bold text-3xl text-orange-400`} />
                </div>
            </div>
        )
    }
    else if(color === "purple") {
        return (
            <div className={`px-4 py-5 rounded-lg border-purple-300 shadow-xl border flex flex-col gap-5 bg-purple-100`}>
                <h1 className={`text-sm text-purple-500`}>{title}</h1>
                <div className={`flex items-center justify-start gap-5`}>
                    <div className={`bg-purple-50 p-3 rounded-full`}>
                        <Icon size={24} className={`text-purple-400`} />
                    </div>
                    <CountUp start={0} end={count} duration={2} className={`font-bold text-3xl text-purple-400`} />
                </div>
            </div>
        )
    }
    else if(color === "slate") {
        return (
            <div className={`px-4 py-5 rounded-lg border-blue-100 shadow-xl border flex flex-col gap-5 bg-slate-50`}>
                <h1 className={`text-sm text-slate-500`}>{title}</h1>
                <div className={`flex items-center justify-start gap-5`}>
                    <div className={`border border-blue-200 p-3 rounded-full`}>
                        <Icon size={24} className={`text-blue-400`} />
                    </div>
                    <CountUp start={0} end={count} duration={2} className={`font-bold text-3xl text-blue-400`} />
                </div>
            </div>
        )
    }
}

export default Card