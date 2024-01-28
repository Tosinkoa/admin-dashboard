import Head from "next/head";

const WebsiteMetadata = ({
  title,
  keywords,
  description,
  children,
  OG_Title_Key,
  OG_Title_Content,
}) => {
  return (
    <div>
      <Head>
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />

        <title>{title}</title>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={OG_Title_Content} key={OG_Title_Key} />
        <meta property="og:description" content="Admin Dashboard" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        {/* <link rel="icon" href="/favicon/favicon.ico" /> */}
      </Head>
      {children}
    </div>
  );
};

export default WebsiteMetadata;

WebsiteMetadata.defaultProps = {
  title: "Admin dashboard",
  description: "Best Admin dashboard",
  keywords: "admin dashboard, admin, dashboard",
  OG_Title_Content: "Best admin dashboard ever",
  OG_Title_Key: "Tm Dashboard",
};
