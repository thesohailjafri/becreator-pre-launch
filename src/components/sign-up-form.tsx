"use client"

import * as React from "react"
import { GlassButton } from "@/components/glass/glass-button"
import { GlassInput } from "@/components/glass/glass-input"
import {
  GlassCard,
  GlassCardHeader,
  GlassCardTitle,
  GlassCardDescription,
  GlassCardContent,
  GlassCardFooter,
} from "@/components/glass/glass-card"

export function SignUpForm() {
  return (
    <GlassCard elastic className="rounded-2xl">
      <GlassCardHeader>
        <GlassCardTitle>Create an account</GlassCardTitle>
        <GlassCardDescription>
          Enter your details to get started
        </GlassCardDescription>
      </GlassCardHeader>
      <GlassCardContent className="space-y-4">
        <div className="space-y-1.5">
          <label htmlFor="name" className="text-sm font-medium text-white/70">
            Name
          </label>
          <GlassInput id="name" placeholder="John Doe" />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="email" className="text-sm font-medium text-white/70">
            Email
          </label>
          <GlassInput id="email" type="email" placeholder="john@example.com" />
        </div>
        <div className="space-y-1.5">
          <label
            htmlFor="password"
            className="text-sm font-medium text-white/70"
          >
            Password
          </label>
          <GlassInput id="password" type="password" placeholder="••••••••" />
        </div>
      </GlassCardContent>
      <GlassCardFooter>
        <GlassButton className="w-full" variant="default">
          Sign Up
        </GlassButton>
      </GlassCardFooter>
    </GlassCard>
  )
}
