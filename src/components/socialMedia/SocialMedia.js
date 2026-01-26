import React from "react";
import "./SocialMedia.scss";
import {socialMediaLinks} from "../../portfolio";

const SvgIcon = ({icon, title}) => {
  const icons = {
    github: (
      <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 . 405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
    linkedin: (
      <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.824 0-9.737h3.554v1.378c.43-.664 1.195-1.609 2.905-1.609 2.121 0 3.71 1.384 3.71 4.362v5.606zM5.337 8.855c-1.144 0-1.915-.762-1.915-1.715 0-.957.768-1.715 1.959-1.715 1.188 0 1.914.758 1.939 1.715 0 .953-.751 1.715-1.983 1.715zm1.946 11.597H3.392V9.715h3.891v10.737zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    gmail: (
      <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
      </svg>
    ),
    twitter: (
      <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 0a10.664 10.664 0 00-9.09-5.25 4.48 4.48 0 008-4.3A10.9 10.9 0 0123 3z" />
      </svg>
    ),
    facebook: (
      <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
    instagram: (
      <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.117.6c-.588.147-1.079.345-1.554.571-.571.252-1.065.609-1.44 1.05-.44.439-.799.939-1.05 1.49-.266.643-.468 1.519-.604 2.754-.06 1.254-.074 1.589-.074 4.692 0 3.1.015 3.434.074 4.694.131 1.209.335 2.063.6 2.75.27.735.645 1.353 1.128 1.851.376.416.88.776 1.467 1.025.645.328 1.435.547 2.51.643 1.064.088 1.407.107 4.282.107 2.881 0 3.212-.019 4.274-.104 1.081-.057 1.873-.275 2.513-.644.565-.281 1.073-.645 1.495-1.049a2.884 2.884 0 001.07-1.47c.266-.735.505-1.590.646-2.740.056-1.066.087-1.405.087-4.686 0-3.285-.03-3.625-.086-4.688-.144-1.148-.384-2.018-.648-2.742-.274-.766-.639-1.325-1.108-1.847-.47-.533-1.02-.926-1.59-1.141-.652-.278-1.434-.478-2.519-.563C15.322.03 14.988.015 12 0zm0 2.16c3.203 0 3.585.009 4.849.070 1.171.054 1.805.244 2.227.408.561.217.96.477 1.382.896.419.42.679.821.896 1.38.164.422.355 1.056.41 2.223.057 1.265.07 1.645.07 4.849 0 3.203-.012 3.585-.07 4.849-.054 1.171-.246 1.806-.41 2.228-.217.561-.477.96-.896 1.382-.42.419-.821.679-1.38.896-.422.164-1.056.355-2.223.41-1.265.057-1.645.07-4.849.07-3.203 0-3.585-.012-4.849-.07-1.171-.054-1.806-.246-2.228-.41-.561-.217-.96-.477-1.382-.896-.419-.42-.679-.821-.896-1.38-.164-.422-.355-1.056-.41-2.223-.057-1.265-.07-1.645-.07-4.849 0-3.203.012-3.585.07-4.849.054-1.171.246-1.806.41-2.228.217-.561.477-.96.896-1.382.42-.419.821-.679 1.38-.896.422-.164 1.056-.355 2.223-.41 1.265-.057 1.645-.07 4.849-.07z" />
        <circle cx="12" cy="12" r="3.846" />
        <path d="M12 15.533c-1.948 0-3.533-1.585-3.533-3.533S10.052 8.467 12 8.467s3.533 1.585 3.533 3.533-1.585 3.533-3.533 3.533zm4.604-7.304a.826.826 0 11-1.652 0 .826.826 0 011.652 0z" />
      </svg>
    ),
    medium: (
      <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42c1.87 0 3.38 2.88 3.38 6.42M24 12c0 2.98-.46 5.4-1.03 5.4-.57 0-1.04-2.42-1.04-5.4s.47-5.4 1.04-5.4c.57 0 1.03 2.42 1.03 5.4z" />
      </svg>
    ),
    stackoverflow: (
      <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.5 2H3.5C2.119 2 1 3.119 1 4.5v15C1 20.881 2.119 22 3.5 22h17C21.881 22 23 20.881 23 19.5v-15C23 3.119 21.881 2 20.5 2zM6.5 20.5h-3v-8h3v8zm10-8.5h-3v8h3v-8zm6.5 8.5h-3v-6h3v6zm0-8h-3v-2h3v2z" />
      </svg>
    ),
    gitlab: (
      <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.74 12.48h-2.84c-.03.54-.46 1.01-1.02 1.01s-.99-.47-1.02-1.01H7.12c0 .54-.46 1.01-1.02 1.01s-.99-.47-1.02-1.01H2.24c0 .54-.46 1.01-1.02 1.01s-.99-.47-1.02-1.01H-.66c0-3.31 2.69-6 6-6h11.32c3.31 0 6 2.69 6 6h-2.84c-.03.54-.46 1.01-1.02 1.01s-.99-.47-1.02-1.01z" />
      </svg>
    )
  };
  
  return icons[icon] || null;
};

export default function socialMedia() {
  if (!socialMediaLinks.display) {
    return null;
  }
  return (
    <div className="social-media-div">
      {socialMediaLinks.github ? (
        <a
          href={socialMediaLinks.github}
          className="icon-button github"
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub"
        >
          <SvgIcon icon="github" title="GitHub" />
        </a>
      ) : null}

      {socialMediaLinks.linkedin ? (
        <a
          href={socialMediaLinks.linkedin}
          className="icon-button linkedin"
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn"
        >
          <SvgIcon icon="linkedin" title="LinkedIn" />
        </a>
      ) : null}

      {socialMediaLinks.gmail ? (
        <a
          href={`mailto:${socialMediaLinks.gmail}`}
          className="icon-button google"
          rel="noopener noreferrer"
          title="Gmail"
        >
          <SvgIcon icon="gmail" title="Gmail" />
        </a>
      ) : null}

      {socialMediaLinks.twitter ? (
        <a
          href={socialMediaLinks.twitter}
          className="icon-button twitter"
          target="_blank"
          rel="noopener noreferrer"
          title="Twitter"
        >
          <SvgIcon icon="twitter" title="Twitter" />
        </a>
      ) : null}

      {socialMediaLinks.facebook ? (
        <a
          href={socialMediaLinks.facebook}
          className="icon-button facebook"
          target="_blank"
          rel="noopener noreferrer"
          title="Facebook"
        >
          <SvgIcon icon="facebook" title="Facebook" />
        </a>
      ) : null}

      {socialMediaLinks.instagram ? (
        <a
          href={socialMediaLinks.instagram}
          className="icon-button instagram"
          target="_blank"
          rel="noopener noreferrer"
          title="Instagram"
        >
          <SvgIcon icon="instagram" title="Instagram" />
        </a>
      ) : null}

      {socialMediaLinks.medium ? (
        <a
          href={socialMediaLinks.medium}
          className="icon-button medium"
          target="_blank"
          rel="noopener noreferrer"
          title="Medium"
        >
          <SvgIcon icon="medium" title="Medium" />
        </a>
      ) : null}

      {socialMediaLinks.stackoverflow ? (
        <a
          href={socialMediaLinks.stackoverflow}
          className="icon-button stack-overflow"
          target="_blank"
          rel="noopener noreferrer"
          title="Stack Overflow"
        >
          <SvgIcon icon="stackoverflow" title="Stack Overflow" />
        </a>
      ) : null}

      {socialMediaLinks.gitlab ? (
        <a
          href={socialMediaLinks.gitlab}
          className="icon-button gitlab"
          target="_blank"
          rel="noopener noreferrer"
          title="GitLab"
        >
          <SvgIcon icon="gitlab" title="GitLab" />
        </a>
      ) : null}
    </div>
  );
}
