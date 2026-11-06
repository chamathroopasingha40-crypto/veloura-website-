# Veloura admin setup (important)
This package includes the public website only. It does NOT pretend to provide a working secure admin login.

A real phone-friendly CMS can be added using a Git-backed CMS, but it requires a supported authentication flow for GitHub. Do not publish GitHub tokens or passwords in website JavaScript, HTML, or chat. Netlify Git Gateway should not be assumed available for a new setup.

Next safe step: confirm the Netlify site's current deploy method and choose an authentication provider/OAuth flow that is currently supported. Once that is verified, configure the CMS and test login before calling the admin panel live.
