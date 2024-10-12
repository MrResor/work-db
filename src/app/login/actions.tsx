'use server'
 
import { signIn } from '@/auth'
import { redirect } from 'next/navigation'
 
export async function authenticate(_currentState: unknown, formData: FormData) {
  try {
    console.log(formData);
    //wait signIn("credentials", formData)
  } catch (error) {
    if (error) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
  redirect('/');
}