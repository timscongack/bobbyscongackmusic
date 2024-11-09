import Image from 'next/image'
import Link from 'next/link'
import { Facebook, Instagram } from 'lucide-react'

export default function Biography() {
  return (
    <section className="grid gap-8 md:grid-cols-2">
      <div className="space-y-4">
        <div className="relative aspect-[4/3] w-3/4 mx-auto overflow-hidden rounded-lg">
          <Image
            src="/images/bobbyo.webp"
            alt="Bobby Scongack stage performance"
            width={400}
            height={300}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="relative aspect-[4/3] w-3/4 mx-auto overflow-hidden rounded-lg">
          <Image
            src="/images/bobbyvegabond.webp"
            alt="Bobby Scongack walking with guitar case"
            width={400}
            height={300}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
      <div className="flex flex-col justify-between">
        <div>
          <h2 className="mb-4 text-3xl font-bold tracking-tighter">Biography</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              I've been lucky to share my music with folks across Southern Ontario and Northern Michigan. My songs come from the heart, and when I perform covers, I try to bring a bit of my own style into them. My music is about the ups and downs we all face, and I hope it reflects the strength and hope we hold onto, even when things are tough.
            </p>
            <p>
              I've always been inspired by a mix of Folk, Blues, and Old School Country. Over the years, I've had the chance to play in all kinds of places – from cozy bars to backyard gatherings, festivals, and local fundraisers. Whether it's with a band or just me and my guitar, each performance is special. Winning the Harvest Star Search and Queens Battle Of The Bands, and being a finalist in Sing For The Shot were huge honors, but it's really about the connection with the audience. I'm planning to release my first single in 2024, and I hope it's just the beginning.
            </p>
            <p>
              As a songwriter from Bruce County, I'm always trying to grow and share my music. I believe in the power of music to bring people together – it's raw, honest, and shows who we really are. To me, music is a way to connect, not just with others, but also with myself.
            </p>
          </div>
        </div>
        <div className="mt-8">
          <p className="font-semibold">Follow him below for the latest updates.</p>
          <div className="mt-4 flex gap-4">
            <Link
              href="https://www.facebook.com/bobbyscongackmusic"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 transition-colors hover:text-foreground"
            >
              <Facebook className="h-6 w-6" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link
              href="https://www.instagram.com/bobby.scongack.music/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 transition-colors hover:text-foreground"
            >
              <Instagram className="h-6 w-6" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link
              href="https://www.tiktok.com/@bobbyscongackmusic"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 transition-colors hover:text-foreground"
            >
              <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
              </svg>
              <span className="sr-only">TikTok</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}