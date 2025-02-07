interface MitigatedAttacksProps {
    title: string;
    value: string;
    subtitle: string;
    highlight?: string;
    icon?: string;
}

export default function MitigatedAttacks({ title, value, subtitle, highlight, icon }: MitigatedAttacksProps) {
    return (
        <div className="bg-[#091028]/100 backdrop-blur-lg shadow-lg text-white py-12 gap-4 shadow-lg border border-gray-800 flex flex-col justify-center items-center">
            <div className="flex justify-center items-center">
                {icon ? (
                    <img src={icon} alt="Icon" className="w-16 h-16" />
                ) : null}
            </div>
            <h2 className="text-5xl font-bold text-green-400 mt-2">{value}</h2>
            <p className="text-gray-300 text-[20px] mt-2">
                {title} <span className="text-[#474496] underline">{highlight}</span> {subtitle}
            </p>
        </div>
    );
}
