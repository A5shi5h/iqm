import { NextResponse } from 'next/server';
import { transporter, mailOptions } from '@/lib/nodemailer';
import otpStore from '@/lib/otpStore';

export async function POST(req: Request) {
  const { email } = await req.json();

  if (!email) {
    return NextResponse.json({ message: 'Email is required' }, { status: 400 });
  }

  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  otpStore.set(email, otp);

  try {
    await transporter.sendMail({
      ...mailOptions,
      to: email,
      subject: 'Your OTP Code',
      text: `Your OTP is: ${otp}`,
    });

    return NextResponse.json({ message: 'OTP sent' });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Failed to send OTP' }, { status: 500 });
  }
}
