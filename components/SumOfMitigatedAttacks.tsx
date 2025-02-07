interface SumOfMitigatedAttacksProps {
    title: string;
    value: number;
    subtitle: string;
    highlight?: string;
    highlightSubtitle?: string;
}

export default function SumOfMitigatedAttacks({title, value, subtitle, highlight, highlightSubtitle}: SumOfMitigatedAttacksProps) {
    return (
        <div
            className="bg-[#091028]/100 backdrop-blur-md shadow-lg text-white p-4 border border-gray-800 block items-center gap-2">
            <p className="text-green-400 text-[14px]">{highlight}</p>
            <h2 className="text-5xl font-bold text-gray-300 mt-2 mb-4">{value}</h2>
            <p className="text-white/40 text-[20px]">
                {title}
            </p>
            <p className="text-white/40 text-[20px]">{subtitle}<span className="text-white/40 underline whitespace-break-spaces"> {highlightSubtitle} </span></p>
        </div>
    );
}
