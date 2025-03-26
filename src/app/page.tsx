import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Abdulkhafizov07 - Portfolio</title>
        <meta
          name="description"
          content="This is my personal portfolio website."
        />
        <meta
          name="keywords"
          content="Web Development,Abdulkhafizov07,NewJasjan,newjasjan,Jasurbek,Jasurbek Abdulkhafizov"
        />
        <meta name="author" content="Jasurbek Abdulkhafizov" />
        <meta property="og:title" content="Abdulkhafizov07 - Portfolio" />
        <meta
          property="og:description"
          content="This is my personal portfolio website."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/social-image.png" />
        <meta name="robots" content="index, follow" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "My Website",
              url: "https://mywebsite.com",
            }),
          }}
        />
      </Head>
      <div></div>
    </>
  );
}
