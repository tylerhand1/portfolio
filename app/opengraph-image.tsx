import { ImageResponse } from 'next/og';

export const dynamic = 'force-static';

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#09090b',
          color: '#fafafa',
        }}
        tw="flex flex-col h-full w-full items-center justify-center text-balance text-center"
      >
        <div tw="flex text-7xl mb-10">
          <div>Hi, I&apos;m</div>
          <div tw="ml-2 text-emerald-400">Tyler Hand</div>
        </div>
        <div tw="font-bold text-zinc-100 text-4xl">
          A software engineer with two years experience.
        </div>
      </div>
    ),
  );
}
