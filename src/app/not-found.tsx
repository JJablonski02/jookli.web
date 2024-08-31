'use client';

import Error from 'next/error';
//TODO Jps-21
export default function NotFound() {

  return (
    <html lang="en">
      <body>
          <Error statusCode={404} />
      </body>
    </html>
  );
}