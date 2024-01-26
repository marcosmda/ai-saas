"use client"

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"

const testimonials = [
    {
        name: "Antonio",
        avatar: "A",
        title: "Software Engineer",
        description: "This is teh best application I've ever used!"
    },
    {
        name: "Marcos",
        avatar: "M",
        title: "iOS Developer",
        description: "The code generator saved my time so many times..."
    },
    {
        name: "Lila",
        avatar: "L",
        title: "Designer",
        description: "The images are great for when I am trying to get some inspiration!"
    }
]

export const LandingContent = () => {
    return (
        <div className="px-10 pb-20">
            <h2 className="text-center text-4xl text-white font-extrabold mb-10">
                Testimonials
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {testimonials.map((item) => (
                    <Card
                    key={item.description}
                    className="bg-[#192339] border-none text-white"
                    >
                        <CardHeader>
                            <CardTitle className="flex items-center gap-x-2">
                                <div>
                                    <p className="text-lg">{item.name}</p>
                                    <p className="text-zinc-400 text-sm">{item.title}</p>
                                </div>
                            </CardTitle>
                            <CardContent className="pt-4 px-0">
                                {item.description}
                            </CardContent>
                        </CardHeader>
                    </Card>
                ))}
            </div>
        </div>
    )
}