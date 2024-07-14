
"use client";

import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Head from 'next/head';

export default function SignIn() {
  const [state, handleSubmit] = useForm("mlezwqpj");
  const logoForSocialURL = '@public/images/logoSocialDimentions.png';
  
  if (state.succeeded) {
    return (
      <div className="mt-10 text-center text-green-500">
        תודה על ההודעה! נחזור אליך בהקדם
      </div>
    );
  }
  return (
    <>
      <Head>
        <title>צרו קשר</title>
        <meta name="description" content="צרו קשר" />

        <meta property="og:title" content="צור קשר" />
        <meta property="og:description" content="צרו איתנו קשר וקבעו הרצאה" />
        <meta property="og:image" content= {logoForSocialURL} />
        <meta property="og:url" content="https://www.cyberdreamedu.com/contact" />
        <meta property="og:type" content="website" />
      </Head>

      <div className="mb-10">
        <h1 dir="rtl" className="text-4xl font-bold">צרו קשר</h1>
      </div>
      {/* Form */}
      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          <div dir="rtl">
            <label
              className="mb-1 block text-sm font-medium text-gray-700"
              htmlFor="email"
            >
              כתובת מייל
            </label>
            <input
              id="email"
              type="email"
              name="email"
              className="form-input w-full py-2"
              placeholder="hello@1234.com"
              required
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
              className="mt-1 text-red-500"
            />
          </div>
          <div dir="rtl">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              טקסט
            </label>
            <textarea
              id="message"
              name="message"
              className='form-input w-full py-2 h-36'
              placeholder="היי!"
              style={{ resize: 'none' }}
              required
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
              className="mt-1 text-red-500"
            />
          </div>
        </div>
        <div className="mt-6">
          <button
            type="submit"
            disabled={state.submitting}
            className="btn w-full bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow hover:bg-[length:100%_150%]"
          >
            שליחה
          </button>
        </div>
      </form>
      {/* Bottom link */}
      <div className="mt-6 text-center">
        {/* <Link
          className="text-sm text-gray-700 underline hover:no-underline"
          href="/reset-password"
        >
          Forgot password
        </Link> */}
      </div>
    </>
  );
}
