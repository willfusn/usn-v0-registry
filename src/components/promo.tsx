import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export function Promo({
  title,
  description,
  buttonText,
  buttonLink,
  backgroundImage,
}: {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  backgroundImage: string;
}) {
  return (
    <div className="relative h-[300px] w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src={backgroundImage}
        alt="Hero background"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col justify-center gap-3 px-8 py-3">
        <h1 className="font-bold text-3xl text-white tracking-tight md:text-4xl">
          {title}
        </h1>
        <p className="text-white/75">{description}</p>
        <div>
          <Button asChild size="lg" className="rounded-md">
            <Link href={buttonLink}>{buttonText}</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
