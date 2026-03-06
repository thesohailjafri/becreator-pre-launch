import { NextRequest, NextResponse } from 'next/server'
import clientPromise, { WaitlistSubmission } from '@/lib/mongodb'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, message } = body

    // Validation
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // Connect to MongoDB
    const client = await clientPromise
    const db = client.db('becreator-waitlist')
    const collection = db.collection<WaitlistSubmission>('submissions')

    // Create submission document
    const submission: WaitlistSubmission = {
      name: name.trim(),
      email: email.toLowerCase().trim(),
      message: message?.trim() || undefined,
      createdAt: new Date(),
      userAgent: request.headers.get('user-agent') || undefined,
      ipAddress:
        request.headers.get('x-forwarded-for') ||
        request.headers.get('x-real-ip') ||
        undefined,
    }

    // Insert into database
    const result = await collection.insertOne(submission)

    return NextResponse.json(
      {
        success: true,
        message: 'Successfully joined the waitlist!',
        id: result.insertedId,
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Waitlist submission error:', error)
    return NextResponse.json(
      { error: 'Failed to submit. Please try again.' },
      { status: 500 }
    )
  }
}
