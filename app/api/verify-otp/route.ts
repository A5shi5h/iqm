import { NextResponse } from 'next/server';
import otpStore from '@/lib/otpStore';

export async function POST(req: Request) {
  const { email, otp } = await req.json();

  if (!email || !otp) {
    return NextResponse.json({ message: 'Email and OTP are required' }, { status: 400 });
  }

  const storedOtp = otpStore.get(email);

  if (storedOtp === otp) {
    otpStore.delete(email);
    return NextResponse.json({ message: 'Email verified successfully' });
  }

  return NextResponse.json({ message: 'Invalid OTP' }, { status: 400 });
}