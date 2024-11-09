'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Facebook, Instagram, Send } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      date: formData.get('date') as string,
      venue: formData.get('venue') as string,
      message: formData.get('message') as string,
    }

    // Email submission logic would go here
    console.log('Form submitted:', data)
    setIsModalOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <h1 className="text-2xl font-bold tracking-tighter">Bobby Scongack</h1>
        <nav className="flex items-center gap-4">
          <Link
            href="https://www.facebook.com/bobbyscongackmusic"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/60 transition-colors hover:text-foreground"
            aria-label="Facebook"
          >
            <Facebook className="h-6 w-6" />
          </Link>
          <Link
            href="https://www.instagram.com/bobby.scongack.music/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/60 transition-colors hover:text-foreground"
            aria-label="Instagram"
          >
            <Instagram className="h-6 w-6" />
          </Link>
          <Link
            href="https://www.tiktok.com/@bobbyscongackmusic"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/60 transition-colors hover:text-foreground"
            aria-label="TikTok"
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
          </Link>
          <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
            <DialogTrigger asChild>
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 ease-in-out transform hover:scale-105"
              >
                Book Bobby
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Book a Show</DialogTitle>
                <DialogDescription>
                  Fill out the form below to inquire about booking Bobby for your venue or event.
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" required />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" required />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="date">Preferred Date</Label>
                  <Input id="date" name="date" type="date" required />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="venue">Venue</Label>
                  <Input id="venue" name="venue" required />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="message">Additional Details</Label>
                  <Textarea id="message" name="message" />
                </div>
                <Button type="submit" className="mt-4">
                  <Send className="mr-2 h-4 w-4" />
                  Send Request
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </nav>
      </div>
    </header>
  )
}