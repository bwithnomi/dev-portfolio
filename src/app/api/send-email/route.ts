import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json()

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Using Resend API for reliable email delivery
    const resendApiKey = 're_NjdHk8qp_AV2JGwwV8dUEChUdVCCx2cRU'
    
    if (!resendApiKey) {
      // Fallback: Log the contact form submission
      console.log('Contact Form Submission:', {
        name,
        email,
        subject,
        message,
        timestamp: new Date().toISOString()
      })
      
      return NextResponse.json(
        { message: 'Contact form submitted successfully. We will get back to you soon!' },
        { status: 200 }
      )
    }

    // Send email using Resend API
    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Portfolio Contact <noreply@yourdomain.com>',
        to: ['noman.tech777@gmail.com'],
        reply_to: email,
        subject: `Portfolio Contact: ${subject}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
              New Contact Form Submission
            </h2>
            
            <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #007bff; margin-top: 0;">Contact Details:</h3>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Subject:</strong> ${subject}</p>
            </div>
            
            <div style="background-color: #ffffff; padding: 20px; border: 1px solid #dee2e6; border-radius: 8px;">
              <h3 style="color: #333; margin-top: 0;">Message:</h3>
              <p style="line-height: 1.6; color: #555;">${message.replace(/\n/g, '<br>')}</p>
            </div>
            
            <div style="margin-top: 20px; padding: 15px; background-color: #e9ecef; border-radius: 8px; font-size: 12px; color: #6c757d;">
              <p>This message was sent from your portfolio website contact form.</p>
              <p>Reply directly to this email to respond to ${name} at ${email}</p>
            </div>
          </div>
        `,
      }),
    })

    if (!emailResponse.ok) {
      throw new Error('Failed to send email via Resend')
    }

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    )
  }
}
