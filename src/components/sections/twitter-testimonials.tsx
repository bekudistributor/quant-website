import React from 'react';
import Image from 'next/image';
import { Heart, MessageCircle, Info } from 'lucide-react';
import { cn } from "@/lib/utils";

interface Tweet {
  name: string;
  handle: string;
  isVerified: boolean;
  avatarUrl: string | null;
  initials?: string;
  tweet: string;
  imageUrl?: string;
  date: string;
  likes: string;
  replies: string;
  tweetUrl: string;
}

const tweets: Tweet[] = [
  {
    name: "Nat Friedman",
    handle: "natfriedman",
    isVerified: true,
    avatarUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4b549735-8d48-46cb-9944-8f198d02a4b5-granola-ai/assets/icons/image_normal-3.jpg?",
    tweet: "Been using [granola.so](http://granola.so/) a bit lately; it generates the best meeting notes of anything I've tried so far. Not sure how they did that.",
    date: "9:55 AM · Jun 20, 2024",
    likes: "558",
    replies: "Read 25 replies",
    tweetUrl: "https://twitter.com/natfriedman/status/1803788840781365393",
  },
  {
    name: "Guillermo Rauch",
    handle: "rauchg",
    isVerified: true,
    avatarUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4b549735-8d48-46cb-9944-8f198d02a4b5-granola-ai/assets/icons/8TfcCN0r_normal-7.jpg?",
    tweet: "It's actually unbelievable how good [granola.ai](http://granola.ai/) is.\n\nIt replaces writing documents. It's the killer user research tool. The ability to “chat with the transcript” to come back to a point that was made is pure gold. There's no going back to pre-granola days.",
    date: "4:14 PM · Jan 8, 2025",
    likes: "1.6K",
    replies: "Read 68 replies",
    tweetUrl: "https://twitter.com/rauchg/status/1877101525354369202",
  },
  {
    name: "Des Traynor",
    handle: "destraynor",
    isVerified: true,
    avatarUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4b549735-8d48-46cb-9944-8f198d02a4b5-granola-ai/assets/icons/7-4OAu7I_normal-11.jpg?",
    tweet: "I don't think I've ever gotten more thanks from people recommending an app than I have for @meetgranola.\n\nEveryone thinks they have a good meeting notes app, but it's only once they use Granola they realise what they've been missing.",
    date: "5:34 PM · Apr 3, 2025",
    likes: "354",
    replies: "Read 35 replies",
    tweetUrl: "https://twitter.com/destraynor/status/1907909497399734459",
  },
  {
    name: "Ryan Hoover",
    handle: "rrhoover",
    isVerified: false,
    avatarUrl: null, // Asset missing
    initials: "RH",
    tweet: "Granola is so good.\n\nI hope they introduce a marketplace of one-click integrations. I got use cases! :)",
    date: "4:49 PM · Mar 31, 2025",
    likes: "318",
    replies: "Read 45 replies",
    tweetUrl: "https://twitter.com/rrhoover/status/1906811173376278741",
  },
  {
    name: "Alex Cohen",
    handle: "anothercohen",
    isVerified: false,
    avatarUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4b549735-8d48-46cb-9944-8f198d02a4b5-granola-ai/assets/icons/CjFMSLAg_normal-8.jpg?",
    tweet: "The two AI tools I use most often right now:\n- [Granola.ai](http://Granola.ai)\n- [Howie.com](http://Howie.com)\n\nBoth are 10/10.\n\nGranola has solved meeting notes for me and Howie has saved me dozens of hours of scheduling headaches",
    date: "9:09 PM · Mar 21, 2025",
    likes: "635",
    replies: "Read 31 replies",
    tweetUrl: "https://twitter.com/anothercohen/status/1903252708926328846",
  },
  {
    name: "Nichole Wischoff",
    handle: "NWischoff",
    isVerified: false,
    avatarUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4b549735-8d48-46cb-9944-8f198d02a4b5-granola-ai/assets/icons/_fAEC4dC_normal-12.jpg?",
    tweet: "Just used Granola AI for the first time to take notes for me. Totally insane product. Highly recommend. Not an investor sadly.",
    date: "1:41 PM · Nov 12, 2024",
    likes: "307",
    replies: "Read 41 replies",
    tweetUrl: "https://twitter.com/NWischoff/status/1856407078132129826",
  },
  {
    name: "Soleio",
    handle: "soleio",
    isVerified: false,
    avatarUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4b549735-8d48-46cb-9944-8f198d02a4b5-granola-ai/assets/icons/6HobRr_a_normal-5.jpg?",
    tweet: "I get uncharacteristically excited about group Zoom meetings now\n\nWhy? Because the payoff is seeing @meetgranola really work its magic and generate incredible meeting notes seconds after we adjourn",
    date: "9:36 AM · Aug 8, 2024",
    likes: "43",
    replies: "Read 2 replies",
    tweetUrl: "https://twitter.com/soleio/status/1821541029692035469",
  },
  {
    name: "MDS",
    handle: "mds",
    isVerified: true,
    avatarUrl: null, // Asset missing
    initials: "M",
    tweet: "I love Granola (the AI note taking app)",
    date: "1:34 PM · Sep 19, 2024",
    likes: "22",
    replies: "Read 7 replies",
    tweetUrl: "https://twitter.com/mds/status/1836821285764223251",
  },
  {
    name: "Deedy",
    handle: "deedydas",
    isVerified: true,
    avatarUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4b549735-8d48-46cb-9944-8f198d02a4b5-granola-ai/assets/icons/eLm0sHqx_normal-13.jpg?",
    tweet: "Granola is one of the best made “AI” apps that I've used this year.\n\nIf you are in a lot of meetings, this is a gamechanger. It takes notes in all those meetings for you, so you only need to add what's in your head.\n\nIt's minimal, fast, with no setup. It. just. works.",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4b549735-8d48-46cb-9944-8f198d02a4b5-granola-ai/assets/images/Ge2tj93asAA1TWA-10.jpg?",
    date: "12:00 PM · Dec 15, 2024",
    likes: "1.0K",
    replies: "Read 38 replies",
    tweetUrl: "https://twitter.com/deedydas/status/1868340259752456280",
  },
  {
    name: "Dan Shipper 📧",
    handle: "danshipper",
    isVerified: false,
    avatarUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4b549735-8d48-46cb-9944-8f198d02a4b5-granola-ai/assets/icons/_Ef-eDlc_normal-6.jpg?",
    tweet: "If you aren’t using @meetgranola for your meetings you are seriously missing out.\n\nIncredible product.",
    date: "5:03 PM · Jun 3, 2024",
    likes: "35",
    replies: "Read 4 replies",
    tweetUrl: "https://twitter.com/danshipper/status/1797735814023319871",
  },
  {
    name: "Steven Tey",
    handle: "steventey",
    isVerified: true,
    avatarUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/4b549735-8d48-46cb-9944-8f198d02a4b5-granola-ai/assets/icons/owJG92AC_normal-10.jpg?",
    tweet: "Replying to @james406\n\nBullish on @meetgranola — no more “AI notetaker” needed\n[granola.so](http://granola.so/)",
    date: "12:55 AM · Sep 16, 2024",
    likes: "4",
    replies: "Read more on X",
    tweetUrl: "https://twitter.com/steventey/status/1835543048891371851",
  },
];

const VerifiedIcon = () => (
    <svg viewBox="0 0 22 22" aria-label="Verified account" role="img" className="w-[18px] h-[18px] inline-block ml-1" data-testid="icon-verified">
      <g>
        <path fill="#1d9bf0" d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.056-.75-1.69-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.706-1.084-1.246-1.438-.54-.354-1.17-.552-1.816-.57-.647-.018-1.276.215-1.817.57-.54.354-.972.851-1.246 1.438-.608-.223-1.264-.27-1.898-.14-.634.13-.1218.436-1.687.882-.445.47-1.75.055-1.882.69-.13.633.083.897-.14 1.897.224.586.706 1.084 1.246 1.438.354.54.552 1.17.57 1.816.018.646.215 1.275.57 1.817.354.54.852.972 1.438 1.246-.223.607-.27 1.264-.14 1.897.131.634.437 1.218.882 1.687.47.445 1.056.75 1.69.882.633.13 1.29.083 1.897-.14.273.587.706 1.084 1.246 1.438.54.354 1.17.552 1.816.57.647.018 1.276-.215 1.817-.57.54-.354.972-.851 1.246-1.438.608.223 1.264.27 1.898.14.634-.13 1.218-.437 1.687-.882.445-.47.75-1.055.882-1.69.13-.633-.083-1.897.14-1.897-.223-.586-.705-1.084-1.245-1.438.354-.54.552-1.17.57-1.816zM9.663 14.85l-3.42-3.419 1.414-1.414 1.994 1.994 4.542-4.543 1.414 1.414-5.956 5.956z"></path>
      </g>
    </svg>
  );
  
const TwitterXIcon = () => (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="w-5 h-5 text-[#0f1419]">
        <g><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></g>
    </svg>
);

const TweetContent = ({ text } : {text: string}) => {
    const parts = text.split(/(\[.+?\]\(.+?\)|@[\w]+|Replying to @[\w]+)/g).filter(Boolean);

    return (
        <p className="text-[15px] leading-relaxed text-[#0f1419] whitespace-pre-wrap font-['Inter']">
            {parts.map((part, i) => {
                const linkMatch = part.match(/\[(.+?)\]\((.+?)\)/);
                if (linkMatch) {
                    return <a key={i} href={linkMatch[2]} target="_blank" rel="noopener noreferrer" className="text-[#1d9bf0] hover:underline">{linkMatch[1]}</a>;
                }
                if (part.startsWith('@') || part.startsWith('Replying to @')) {
                    const mention = part.startsWith('Replying to ') ? part.split(' ')[2] : part
                    return <a key={i} href={`https://twitter.com/${mention.substring(1)}`} target="_blank" rel="noopener noreferrer" className="text-[#1d9bf0] hover:underline">{part}</a>;
                }
                return <span key={i}>{part}</span>;
            })}
        </p>
    );
};

const TweetCard = (tweet: Tweet) => {
    return (
        <a href={tweet.tweetUrl} target="_blank" rel="noopener noreferrer" className="block break-inside-avoid-column mb-6">
            <div className="border border-[#eff3f4] rounded-2xl p-4 bg-white hover:bg-gray-50/70 transition-colors duration-200">
                <div className="flex items-start justify-between">
                    <div className="flex items-start gap-3">
                        {tweet.avatarUrl ? (
                            <Image src={tweet.avatarUrl} alt={tweet.name} width={48} height={48} className="rounded-full flex-shrink-0" />
                        ) : (
                            <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
                                <span className="text-gray-500 font-semibold text-xl">{tweet.initials}</span>
                            </div>
                        )}
                        <div>
                            <div className="flex items-center">
                                <span className="font-bold text-[#0f1419] text-[15px] hover:underline">{tweet.name}</span>
                                {tweet.isVerified && <VerifiedIcon />}
                            </div>
                            <p className="text-[#536471] text-[15px]">@{tweet.handle}</p>
                        </div>
                    </div>
                    <TwitterXIcon />
                </div>
                
                <div className="mt-3">
                    <TweetContent text={tweet.tweet} />
                </div>
                
                {tweet.imageUrl && (
                    <div className="mt-3 border border-[#cfd9de] rounded-2xl overflow-hidden aspect-video">
                        <Image src={tweet.imageUrl} alt="Tweet image" width={500} height={281} className="w-full h-full object-cover" />
                    </div>
                )}
                
                <p className="text-[#536471] text-[15px] mt-4 hover:underline">{tweet.date}</p>
                
                <div className="flex items-center gap-5 text-[13px] text-[#536471] mt-4">
                    <div className="flex items-center gap-1.5 group">
                        <Heart className="w-4 h-4 text-[#536471] group-hover:text-[#f91880]" />
                        <span className="group-hover:text-[#f91880]">{tweet.likes}</span>
                    </div>
                    <div className="flex items-center gap-1.5 group">
                        <MessageCircle className="w-4 h-4 text-[#536471] group-hover:text-[#1d9bf0]" />
                        <span className="group-hover:text-[#1d9bf0]">Reply</span>
                    </div>
                    <div className="flex items-center gap-1.5 group">
                        <svg viewBox="0 0 24 24" aria-hidden="true" className="w-4 h-4 fill-current text-[#536471] group-hover:text-[#1d9bf0]"><g><path d="M12 2.59l5.7 5.7-1.41 1.42L13 6.41V16h-2V6.41l-3.3 3.3-1.41-1.42L12 2.59zM21 15l-.02 3.51c0 1.38-1.12 2.49-2.5 2.49H5.5C4.11 21 3 19.88 3 18.5V15h2v3.5c0 .28.22.5.5.5h12.98c.28 0 .5-.22.5-.5L19 15h2z"></path></g></svg>
                        <span className="group-hover:text-[#1d9bf0]">Copy link</span>
                    </div>
                </div>
                
                <div className="mt-3 pt-3 border-t border-[#eff3f4]">
                    <span className="text-[#1d9bf0] text-[15px] hover:underline">{tweet.replies}</span>
                </div>
            </div>
        </a>
    );
};

const TwitterTestimonials = () => {
  return (
    <section className="py-16 md:py-24 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-5xl font-bold tracking-tight text-center text-granola-dark-green mb-16">
          Built for people with back-to-back meetings
        </h2>
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
            {tweets.map((tweet) => (
                <TweetCard key={tweet.handle} {...tweet}/>
            ))}
        </div>
      </div>
    </section>
  );
};

export default TwitterTestimonials;