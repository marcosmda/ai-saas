import Image from "next/image"

interface LoaderProps {
    extraLabel?: string
}


export const Loader = ({extraLabel = ""}: LoaderProps) => {
    return (
        <div className="h-full flex flex-col gap-y-4 items-center justify-center">
            <div className="w-10 h-10 relative animate-spin">
                <Image alt="logo" fill src="/logo.png"/>
            </div>
            <p className="text-sm text-muted-foreground">
                Genius is thinking...
            </p>
            {extraLabel && (
                <p className="text-sm text-muted-foreground">
                    {extraLabel}
                </p>
            )}
        </div>
    )
}