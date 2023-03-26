import UnderlineLink from "@modules/common/components/underline-link"
import Image from "next/image"

const Hero = () => {
  return (
    <div className="h-[90vh] w-full relative">
      <div className="text-white absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:text-left small:justify-end small:items-start small:p-32">
        <h1 className="text-2xl-semi mb-4 drop-shadow-md shadow-black">
          Hi 👋 welcome to my electronic shop
        </h1>
        <p className="text-base-regular max-w-[32rem] mb-6 drop-shadow-md shadow-black">
          The best electronic devices to help you in your daily tasks both in
          the professional and personal life.
        </p>
        <UnderlineLink href="/store">Explore products</UnderlineLink>
      </div>
      <div className="bg-white h-[90vh] w-full">
        The best electronic devices to help you in your daily tasks both in the
        professional and personal life.
      </div>
      <Image
        src="/hero2.jpg"
        layout="fill"
        loading="eager"
        priority={true}
        quality={90}
        objectFit="cover"
        alt="computer"
        className="absolute inset-0"
        draggable="false"
      />
      <div className="bg-black h-[90vh] w-full absolute top-0 opacity-50"></div>
    </div>
  )
}

export default Hero
