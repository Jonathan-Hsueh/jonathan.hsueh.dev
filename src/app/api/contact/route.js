import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { from, subject, message } = await request.json();

    // Configure your email service (Gmail example)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // your email
        pass: process.env.EMAIL_PASS, // app password
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'jonathanhsueh@ucsb.edu',
      subject: `Contact Form: ${subject}`,
      text: `From: ${from}\nWebsite Email\n${message}`,
    });

    return Response.json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Email error:', error);
    return Response.json(
      { message: 'Failed to send email' }, 
      { status: 500 }
    );
  }
}