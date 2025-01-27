import { Head } from "$fresh/runtime.ts";

export default function Error404() {
  return (
    <>
      <Head>
        <title>404 - Page not found</title>
      </Head>
      <div class="px-4 py-8 mx-auto bg-[#FFF6C0] min-h-screen flex items-center justify-center">
        <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center text-center">
          <img
            class="my-6"
            src="/not-found.svg"
            width="400"
            height="400"
            alt="No Money logo: a man cry without money in his pockets"
          />
          <h1 class="text-6xl font-bold text-[#000000]">404 - Money not found</h1>
          <p class="my-4 text-2xl text-[#000000]">
            The wallet you were looking for is empty.
          </p>
          <button 
            onclick="window.location.href='/'" 
            class="mt-4 px-4 py-2 bg-[#000000] text-[#FFF6C0] text-xl rounded">
            Go back home
          </button>
        </div>
      </div>
    </>
  );
}