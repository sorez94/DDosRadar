import fetch from 'node-fetch';
const https = require('https');
const agent = new https.Agent({
    rejectUnauthorized: false,
});

interface IMaximumAttacks {
    value: number;
}

export const revalidate = 1;
    export default async function MaximumAttacks() {

        const response = await fetch("https://api-ddos.tic.ir/api/top-five-lrl", {
            agent
        });

        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }
        const data = await response.json() as IMaximumAttacks[];
        const maxObj = data.reduce((max: any, curr: any) =>
                curr.value > max.value ? curr : max,
            data[0]
        );
        const maxValueGbps = Number((maxObj.value / 1e9).toFixed(2));

        const restGbps = data
            .filter((item: any) => item !== maxObj)
            .map((item: any) => Number((item.value / 1e9).toFixed(2)));
        return (
            <div className="bg-[#091028]/100 backdrop-blur-md text-white px-4 py-2 shadow-lg border border-gray-800">
                <div className="flex justify-start items-center py-4">
                    <img
                        src="/icons/ddos.png"
                        alt="Icon"
                        className="w-68 h-68 mr-[15px]"
                    />
                    <div>
                        <p className="text-xl font-bold">Maximum Attack Volumes</p>
                        <p className="text-[12px] text-white/80">BITS</p>
                    </div>
                </div>
                <div className="mb-[6px]">
                    <p className="text-green-400 text-[40px]">
                        {maxValueGbps}{" "}
                        <span className="text-[#4A5371] text-[15px]">Gbps</span>
                    </p>
                </div>
                <div>
                    <p className="mb-[6px] text-[18px]">Maximum Volume</p>
                    <p className="mb-[6px] text-[18px]">
                        Of The{" "}
                        <span className="text-[#474496] underline whitespace-break-spaces">
                    Mitigated
                  </span>{" "}
                        Attacks
                    </p>
                </div>
                <div className="flex justify-start">
                    {restGbps.map((value: number, index: number) => (
                        <div
                            key={index}
                            className="border border-[#3A4053] rounded-[5px] py-[2px] px-[8px] my-[18px] mr-[6px] text-[13px] text-[#cecfd4]"
                        >
                            {value} Gbps
                        </div>
                    ))}
                </div>
            </div>
        );
    }
