import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request) {
  try {
    const { name, email, message } = await request.json()

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    // Email to you (the portfolio owner)
    const ownerMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Your email
      subject: `New message from ${name} (${email})`,
      text: message,
      html: `
        <h3>New message from your portfolio</h3>
        <p><strong>From:</strong> ${name} (${email})</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    }

    // Confirmation email to sender
    const senderMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Message received - Anup Tiwari',
      text: `Thank you for your message! I'll get back to you soon.\n\nYour message:\n${message}`,
      html: `
        <h3>Thank you for your message!</h3>
        <p>I've received your message and will get back to you soon.</p>
        <p><strong>Your message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <p>Best regards,<br>Anup Tiwari</p>
      `,
    }

    // Send both emails
    await transporter.sendMail(ownerMailOptions)
    await transporter.sendMail(senderMailOptions)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json({ 
      success: false,
      error: 'Failed to send message' 
    }, { status: 500 })
  }
}