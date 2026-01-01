import Image from "next/image";

export const Loading = () => {
    return (
        <div className="h-full w-full flex flex-col jsutify-center items-center">
            <Image
            src="./logo.svg"
            alt="Logo"
            height={120}
            width={200}
            className="animate-pulse duration-700"
            />
        </div>
    )
}