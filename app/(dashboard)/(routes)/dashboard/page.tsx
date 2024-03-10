"use client"

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowRight, Code2Icon, ImageUpIcon, MessageSquare, Music2, VideoIcon, VideotapeIcon } from "lucide-react";
import { useRouter } from "next/navigation";  //routes

// import { Button } from "@/components/ui/button";
// import { UserButton } from "@clerk/nextjs";
// import Link from "next/link";

const tools = [
  {
    label: "Conversation",
    icon: MessageSquare,
    color:"text-green-500",
    bgColor:"bg-violet-500/10",
    href:"/conversation"
  },
  {
    label: "Music Generation",
    icon: Music2,
    color:"text-black-500",
    bgColor:"bg-black-500/10",
    href:"/music"
  },
  {
    label: "Image Generation",
    icon: ImageUpIcon,
    color:"text-pink-700",
    bgColor:"bg-pink-700/10",
    href:"/image"
  },
  {
    label: "Video Generation",
    icon: VideoIcon,
    color:"text-violet-700",
    bgColor:"bg-violet-700/10",
    href:"/video"
  },
  {
    label: "Code Generation",
    icon: Code2Icon,
    color:"text-orange-500",
    bgColor:"bg-orange-500/10",
    href:"/code"
  },
]

const DashboardPage = () => {
  const router = useRouter();  //routes
  return (
    <div>
     <div className="mb-8 space-y-4">
     <h2 className="text-2xl md:text-4xl font-bold text-center">
      Explore the Power of AI
     </h2>
     <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
       Chat with the smartest AI - Experience the Power of AI
     </p>
     </div>
      <div className="px-4 md:px-28 lg:px-32 space-y-4">
         {tools.map((tool)=>(
          <Card 
          onClick={() => router.push(tool.href)}  //for routes
          key={tool.href}
          className="p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer"
          >
            <div className="flex items-center gap-x-4">
                <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
             <tool.icon className={cn("w-8 h-8", tool.color)}/>
                </div>
                <div className="font-semibold">
                   {tool.label}
               </div>
            </div>
            <ArrowRight className="w-5 h-5"/>
          </Card>
         ))}
      </div>
    </div>
  )
}

export default DashboardPage;

