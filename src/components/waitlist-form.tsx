/* eslint-disable react/no-unescaped-entities */
'use client'

import { GlassButton } from '@/components/glass/glass-button'
import {
  GlassCard,
  GlassCardContent,
  GlassCardDescription,
  GlassCardFooter,
  GlassCardHeader,
  GlassCardTitle,
} from '@/components/glass/glass-card'
import { GlassInput } from '@/components/glass/glass-input'
import Image from 'next/image'
import { useState } from 'react'
import { toast } from 'sonner'

export function WaitlistForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validation
    if (!formData.name.trim() || !formData.email.trim()) {
      toast.error('Please fill in all required fields')
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      toast.error('Please enter a valid email address')
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit')
      }

      toast.success('Successfully joined the waitlist! 🎉')
      setIsSubmitted(true)
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      toast.error(
        error instanceof Error
          ? error.message
          : 'Failed to submit. Please try again.',
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleShare = () => {
    navigator.clipboard.writeText('https://becreator.app')
    toast.success('Link copied to clipboard 🥰')
  }

  if (isSubmitted) {
    return (
      <GlassCard
        elastic={false}
        className="mx-auto w-full max-w-sm rounded-2xl text-center"
      >
        <GlassCardHeader>
          <div className="flex flex-col items-center gap-4 w-full">
            <div className="relative">
              <Image
                src="/logo.png"
                alt="Logo"
                width={100}
                height={100}
                className="shrink-0 w-16 h-16"
              />
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xl">
                ✓
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <GlassCardTitle className="text-xl">
                Thank You for Joining! 🎉
              </GlassCardTitle>
              <GlassCardDescription className="text-base leading-relaxed">
                You're on the list! Sohail will reach out to you as soon as
                BeCreator launches.
              </GlassCardDescription>
            </div>
          </div>
        </GlassCardHeader>
        <GlassCardContent className="space-y-4">
          <div className="bg-white/5 border border-white/10 rounded-lg p-4 space-y-2">
            <div className="text-sm font-semibold text-white/90">
              🎁 Your Early Bird Bonus
            </div>
            <div className="text-sm text-white/70 leading-relaxed">
              As a thank you for being an early supporter, you'll receive
              <span className="font-semibold text-white/90">
                {' '}
                lifetime free access{' '}
              </span>
              to BeCreator Pro when we launch! <br />
              <span className="font-semibold text-white/90">
                Limited to 1st 100 supporter
              </span>
            </div>
          </div>
        </GlassCardContent>
        <GlassCardFooter className="flex-col gap-3">
          <div className="text-xs text-red/50">
            I'll send you an email with updates soon
          </div>
          <GlassButton
            type="button"
            onClick={handleShare}
            elastic={false}
            className="w-full"
            variant="ghost"
          >
            Join Another Person
          </GlassButton>
        </GlassCardFooter>
      </GlassCard>
    )
  }

  return (
    <GlassCard
      elastic={false}
      className="mx-auto w-full max-w-sm rounded-2xl text-left"
    >
      <GlassCardHeader>
        <div className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Logo"
            width={100}
            height={100}
            className="shrink-0 w-10 h-10"
          />
          <div className="flex flex-col gap-1">
            <GlassCardTitle>BeCreator Waitlist</GlassCardTitle>
            <GlassCardDescription>
              Enter your details to get early access
            </GlassCardDescription>
          </div>
        </div>
      </GlassCardHeader>
      <form onSubmit={handleSubmit} className="space-y-4">
        <GlassCardContent className="space-y-4">
          <div className="space-y-1.5">
            <label htmlFor="name" className="text-sm font-medium text-white/70">
              Name
            </label>
            <GlassInput
              id="name"
              placeholder="John Doe"
              value={formData.name}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, name: e.target.value }))
              }
              disabled={isSubmitting}
              required
            />
          </div>
          <div className="space-y-1.5">
            <label
              htmlFor="email"
              className="text-sm font-medium text-white/70"
            >
              Email
            </label>
            <GlassInput
              id="email"
              type="email"
              placeholder="john@example.com"
              value={formData.email}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, email: e.target.value }))
              }
              disabled={isSubmitting}
              required
            />
          </div>
          <div className="space-y-1.5">
            <label
              htmlFor="message"
              className="text-sm font-medium text-white/70"
            >
              Message (Optional)
            </label>
            <GlassInput
              id="message"
              type="text"
              placeholder="I'm interested in..."
              value={formData.message}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, message: e.target.value }))
              }
              disabled={isSubmitting}
            />
          </div>
        </GlassCardContent>
        <GlassCardFooter>
          <GlassButton
            type="button"
            onClick={handleSubmit}
            elastic={false}
            className="w-full"
            variant="primary"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Joining...' : 'Join Waitlist'}
          </GlassButton>
        </GlassCardFooter>
      </form>
    </GlassCard>
  )
}
