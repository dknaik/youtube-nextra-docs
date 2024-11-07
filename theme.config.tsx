import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: (
    <>
      <img
        style={{ width: "80px" }}
        src="https://logowik.com/content/uploads/images/nextjs2106.logowik.com.webp"
        alt=""
      />
    </>
  ),
  project: {
    link: "https://github.com/shuding/nextra-docs-template",
  },
  chat: {
    link: "#",
    icon: (
      <>
        <img
          style={{ width: "35px" }}
          src="https://openvisualfx.com/wp-content/uploads/2019/10/linkedin-icon-logo-png-transparent.png"
          alt=""
        />
      </>
    ),
  },
  docsRepositoryBase: "https://github.com/wpfolk/altuser",
  footer: {
    text: "Nextra Docs Template",
  },
};

export default config;
