import { ContextApi } from "@pancakeswap/localization";
import { FooterLinkType } from "../../../components/Footer/types";

export const footerLinks: (t: ContextApi["t"]) => FooterLinkType[] = (t) => [
  {
    label: t("About"),
    items: [
      {
        label: t("Contact"),
        href: "/",
        isHighlighted: true,
      },
     
      {
        label: t("Blog"),
        href: "https://medium.com/@flamefinance",
      },
      {
        label: t("Community"),
        href: "https://discord.gg/flamefinance",
      },
     
    ],
  },
  {
    label: t("Help"),
    items: [
      {
        label: t("Customer Support"),
        href: "https://docs.flamefinance.org/contact-us/customer-support",
      },
      {
        label: t("Troubleshooting"),
        href: "https://docs.flamefinance.org/help/troubleshooting",
      },
      {
        label: t("Guides"),
        href: "https://docs.flamefinance.org/get-started",
      },
    ],
  },
  {
    label: t("Developers"),
    items: [
      {
        label: "Github",
        href: "https://github.com/",
      },
      {
        label: t("Documentation"),
        href: "https://docs.flamefinance.org",
      },
      
      {
        label: t("Careers"),
        href: "https://docs.flamefinance.org/hiring/",
      },
    ],
  },
];
