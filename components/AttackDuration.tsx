export default async function AttackDuration() {
    // Fetch the duration data
    const durationAttacksRes = await fetch("https://api-ddos.tic.ir/api/duration", {
        cache: "no-cache",
        keepalive: true
    });
    if (!durationAttacksRes.ok) {
        throw new Error("Failed to fetch data");
    }
    const durationAttacksData = await durationAttacksRes.json();
    const durationAttacksValue = durationAttacksData.duration;

    // Convert milliseconds to days, hours, and minutes
    const ms = durationAttacksValue;
    const days = Math.floor(ms / 86400000);
    const remainderAfterDays = ms % 86400000;
    const hours = Math.floor(remainderAfterDays / 3600000);
    const remainderAfterHours = remainderAfterDays % 3600000;
    const minutes = Math.floor(remainderAfterHours / 60000);

    return (
        <div className="w-full h-[110px] bg-[#58CE7A]/10 mt-6 grid grid-cols-4">
            <div className="flex justify-center items-center">
                <img src="/icons/gage.svg" alt="gage" />
            </div>
            <div className="flex gap-4 ml-[20px]">
                <div className="flex justify-center items-center flex-col p-1">
                    <div className="flex justify-center items-center bg-white/10 text-[22px] font-bold w-[45px] h-[45px] rounded-md">
                        {days}
                    </div>
                    <div className="flex justify-center items-center text-[10px] mt-2">
                        DAYS
                    </div>
                </div>
                <div className="flex justify-center items-center flex-col p-1">
                    <div className="flex justify-center items-center bg-white/10 text-[22px] font-bold w-[45px] h-[45px] rounded-md">
                        {hours}
                    </div>
                    <div className="flex justify-center items-center text-[10px] mt-2">
                        HOURS
                    </div>
                </div>
                <div className="flex justify-center items-center flex-col p-1">
                    <div className="flex justify-center items-center bg-white/10 text-[22px] font-bold w-[45px] h-[45px] rounded-md">
                        {minutes}
                    </div>
                    <div className="flex justify-center items-center text-[10px] mt-2">
                        MINUTES
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-start justify-center ml-[80px]">
                <p className="text-green-400 text-[18px]">Maximum</p>
                <p className="text-[18px]">Attack Duration</p>
            </div>
        </div>
    );
}
