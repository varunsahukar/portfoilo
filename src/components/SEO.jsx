import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title, 
  description, 
  keywords, 
  ogImage, 
  ogUrl, 
  ogType = 'website',
  twitterHandle = '@varunsahukar'
}) => {
  const siteName = 'Varun Sahukar | Portfolio';
  const fullTitle = title ? `${title} | ${siteName}` : siteName;
  const defaultDescription = 'Professional Portfolio of Varun Sahukar - Full Stack Developer specializing in React, Next.js, FastAPI, and scalable system architectures.';
  const siteUrl = 'https://varunsahukar.com'; // Replace with actual domain when ready
  
  return (
    <Helmet>
      {/* Standard Metadata */}
      <title>{fullTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={keywords || 'Varun Sahukar, Full Stack Developer, React Developer, Next.js, Python, FastAPI, Web Development, Portfolio'} />
      <meta name="author" content="Varun Sahukar" />
      <link rel="canonical" href={ogUrl || siteUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={ogUrl || siteUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:image" content={ogImage || `${siteUrl}/og-image.png`} />
      <meta property="og:site_name" content={siteName} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitterHandle} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />
      <meta name="twitter:image" content={ogImage || `${siteUrl}/og-image.png`} />

      {/* Structured Data (JSON-LD) */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Varun Sahukar",
          "url": siteUrl,
          "jobTitle": "Full Stack Developer",
          "sameAs": [
            "https://github.com/varunsahukar",
            "https://linkedin.com/in/varunsahukar9798/",
            "https://instagram.com/varun_sahukar19"
          ],
          "knowsAbout": ["React", "Next.js", "FastAPI", "Python", "Web Development", "UI/UX", "System Architecture"],
          "description": defaultDescription
        })}
      </script>
      
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": siteName,
          "url": siteUrl,
          "potentialAction": {
            "@type": "SearchAction",
            "target": `${siteUrl}/#projects{search_term_string}`,
            "query-input": "required name=search_term_string"
          }
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
