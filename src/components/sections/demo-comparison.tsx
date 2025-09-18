import Image from "next/image";
import { ChevronRight, Mic, Sparkles } from "lucide-react";

// Helper component for the window controls
const WindowControls = () => (
    <div className="flex-none relative flex items-center pr-1 pl-2 py-[3%] md:h-8">
        <div className="flex items-center w-full space-x-[3%] md:space-x-2">
            <div className="w-[3%] md:w-2.5 h-[3vw] md:h-2.5 aspect-square rounded-full bg-red-400 border border-red-500"></div>
            <div className="w-[3%] md:w-2.5 h-[3vw] md:h-2.5 aspect-square rounded-full bg-yellow-300 border border-yellow-400"></div>
            <div className="w-[3%] md:w-2.5 h-[3vw] md:h-2.5 aspect-square rounded-full bg-green-400 border border-green-500"></div>
        </div>
    </div>
);

const DemoComparison = () => {
    return (
        <div className="relative gap-2 items-center px-4 -mb-16 w-full max-w-4xl sm:px-6 md:-mb-32 md:flex xl:px-0">
            {/* Video Thumbnails */}
            <div className="hidden md:flex absolute left-0 top-1/2 flex-col gap-1.5 items-stretch p-1.5 w-48 rounded-lg -translate-y-[20%] -translate-x-[66.67%] bg-black/20">
                <div className="overflow-hidden w-full rounded transition-all duration-300 aspect-video hover:scale-101">
                    <Image
                        alt="Meeting participant video feed"
                        width={256}
                        height={144}
                        className="z-0 transition-all object-cover w-full h-full"
                        src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4b549735-8d48-46cb-9944-8f198d02a4b5-granola-ai/assets/images/next-165498-videoThumb1.jpg?"
                    />
                </div>
                <div className="overflow-hidden w-full rounded transition-all duration-300 aspect-video hover:scale-101">
                    {/* NOTE: videoThumb3.jpg was not provided, reusing videoThumb1.jpg as placeholder */}
                    <Image
                        alt="Another meeting participant video feed"
                        width={256}
                        height={144}
                        className="z-0 object-cover w-full h-full"
                        src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4b549735-8d48-46cb-9944-8f198d02a4b5-granola-ai/assets/images/next-165498-videoThumb1.jpg?"
                    />
                </div>
            </div>

            {/* Left Card: Your notes + transcript */}
            <div className="flex flex-col gap-1 items-center w-3/5 md:gap-2 md:w-[95%] md:ml-[3%] md:static">
                <p className="text-xs font-medium sm:text-base md:text-lg text-muted-foreground">Your notes + transcript</p>
                <div className="overflow-hidden rounded-lg shadow-lg flex relative flex-col flex-1 h-full backdrop-blur-lg bg-white border border-border w-full">
                    <WindowControls />
                    <div className="relative flex-1 bg-white px-[5%] md:px-8 pt-4 aspect-[4/4.9] opacity-70 md:opacity-100">
                        {/* NOTE: Recreated content from HTML structure as heroText1.svg asset was not provided */}
                        <div className="relative w-full font-sans text-sm text-granola-dark-gray space-y-2">
                            <div>100, growingg</div>
                            <div>Use tuesday.ai, v manual</div>
                            <div>180</div>
                            <div className="flex items-center">
                                <span>"a priority for q2"</span>
                                <div className="w-0.5 h-7 inline-block rounded-full bg-[#4ADE80] ml-1 opacity-100"></div>
                            </div>
                        </div>
                        <div className="flex absolute bottom-4 left-1/2 z-10 gap-3 items-center p-2.5 bg-white rounded-full border border-border shadow-lg transition-all transform -translate-x-1/2 origin-bottom scale-75 md:scale-100">
                            <div className="flex justify-center items-end w-6 h-6 gap-[3px]">
                                <div className="bg-green-500 rounded-full transition-all duration-300 ease-in-out w-[3px] h-2"></div>
                                <div className="bg-green-500 rounded-full transition-all duration-300 ease-in-out w-[3px] h-4"></div>
                                <div className="bg-green-500 rounded-full transition-all duration-300 ease-in-out w-[3px] h-3"></div>
                            </div>
                            <Mic className="mr-1 w-5 h-5 text-muted-foreground" />
                        </div>
                    </div>
                </div>
            </div>

            <ChevronRight className="hidden flex-none w-6 h-6 md:block text-muted-foreground" />

            {/* Right Card: AI enhanced */}
            <div className="flex absolute right-4 top-6 flex-col gap-1 items-center w-3/5 sm:right-6 md:gap-2 md:top-auto md:static md:w-full">
                <p className="mr-2 text-xs font-medium sm:text-base md:text-lg">
                    <Sparkles className="inline mr-2 size-4 md:size-5 text-[#4ADE80]" />
                    <span>AI enhanced</span>
                </p>
                <div className="overflow-hidden rounded-lg shadow-lg flex relative flex-col flex-1 h-full backdrop-blur-lg bg-white border border-border w-full">
                    <WindowControls />
                    <div className="relative flex-1 bg-white px-[5%] md:px-8 pt-4 aspect-[4/5] max-w-full">
                        <Image
                            alt="AI enhanced meeting summary based on raw notes"
                            width={336}
                            height={529}
                            className="w-full h-auto"
                            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4b549735-8d48-46cb-9944-8f198d02a4b5-granola-ai/assets/svgs/heroText2-2.svg?"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DemoComparison;