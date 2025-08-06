import MitigatedAttacks from "@/components/MitigatedAttacks";
import SumOfMitigatedAttacks from "@/components/SumOfMitigatedAttacks";
import AttackDuration from "@/components/AttackDuration";
import MaximumAttacks from "@/components/MaximumAttacks";

import fetch from 'node-fetch';
const https = require('https');
const agent = new https.Agent({
    rejectUnauthorized: false,
});

interface MitigatedAttacksData {
    count: number;
}
interface DroppedPacketsData {
    sum: number;
}
interface DroppedBytesData {
    sum: number;
}

export const revalidate = 1;

export default async function Home() {
    const mitigatedAttacksRes = await fetch("https://api-ddos.tic.ir/api/count-chart", {
        agent
    });

    if (!mitigatedAttacksRes.ok) {
        throw new Error("Failed to fetch data");
    }
    const mitigatedAttacksData = await mitigatedAttacksRes.json() as MitigatedAttacksData; // تایپ‌دهی به داده‌ها
    const mitigatedAttacksValue = mitigatedAttacksData.count;

    const droppedPacketsRes = await fetch("https://api-ddos.tic.ir/api/sum-pps", {
        agent
    });

    if (!droppedPacketsRes.ok) {
        throw new Error("Failed to fetch data");
    }

    const droppedPacketsData = await droppedPacketsRes.json() as DroppedPacketsData;
    const droppedPacketsValue: number = Number((droppedPacketsData.sum / 10e8).toFixed(2));

    const droppedBytesRes = await fetch("https://api-ddos.tic.ir/api/sum-lrl", {
        agent
    });

    if (!droppedBytesRes.ok) {
        throw new Error("Failed to fetch data");
    }

    const droppedBytesData = await droppedBytesRes.json() as DroppedBytesData;
    const droppedBytesValue: number = Number((droppedBytesData.sum / 10e15).toFixed(2));

    return (
        <>
            <div className="grid grid-cols-2 px-6 gap-4">
                <div>
                    <p className="text-white leading-[1.5rem] text-[13px]">
                        The Radar report has been extracted from the data of the{" "}
                        <span className="text-green-400 underline whitespace-break-spaces"> SIWAN </span> DDoS detection and mitigation system,
                        which has been deployed and operated by the TIC company as the country's defense shield,
                        providing effective protection against attacks.
                    </p>
                </div>
            </div>
            <div className="grid grid-cols-2 px-6 gap-4">
                <div>
                    <div className="grid grid-cols-2 mt-8 h-[300px] grid-cols-[330px_auto]">
                        <MitigatedAttacks
                            title="Number Of"
                            value={mitigatedAttacksValue}
                            subtitle="Attacks"
                            highlight="Mitigated"
                            icon="/icons/arrow-trending-up.svg"
                        />

                        <div
                            className="bg-[#091028]/100 backdrop-blur-lg shadow-lg text-white p-6 border border-gray-800">
                            <h2 className="text-xl font-bold py-4">Cumulative Sum of Mitigated DDoS Attacks</h2>
                            <div className="grid grid-cols-2 mt-4">
                                <SumOfMitigatedAttacks
                                    title="Total Number"
                                    value={droppedPacketsValue}
                                    subtitle="of"
                                    highlightSubtitle=" Dropped Packets"
                                    highlight="BILLION PACKETS"
                                />
                                <SumOfMitigatedAttacks
                                    title="Total Number"
                                    value={droppedBytesValue}
                                    subtitle="of"
                                    highlightSubtitle=" Dropped Bytes"
                                    highlight="PETA BYTES"
                                />
                            </div>
                        </div>
                    </div>
                    <AttackDuration/>
                </div>

                <div className="w-[550px]">
                    <div className="grid grid-cols-2 mt-8 h-[314px] grid-cols-[450px_auto]">
                        <MaximumAttacks/>
                    </div>
                </div>
            </div>
        </>
    );
}
