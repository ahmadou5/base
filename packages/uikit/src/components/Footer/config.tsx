import { Language } from "../LangSelector/types";
import { FooterLinkType } from "./types";
import {
  TwitterIcon,
  TelegramIcon,
  RedditIcon,
  InstagramIcon,
  GithubIcon,
  DiscordIcon,
  MediumIcon,
  YoutubeIcon,
} from "../Svg";

export const footerLinks: FooterLinkType[] = [
  
];

export const socials = [
  {
    label: "Twitter",
    icon: TwitterIcon,
    href: "https://twitter.com/flamefinance",
  },
  {
    label: "Telegram",
    icon: TelegramIcon,
    href: 'https://t.me/flamefinance_official'
  },
  {
    label: "Github",
    icon: GithubIcon,
    href: "https://github.com/flamefinance/",
  },
  {
    label: "Discord",
    icon: DiscordIcon,
    href: "https://discord.gg/pancakeswap",
  },
  {
    label: "Medium",
    icon: MediumIcon,
    href: "https://medium.com/@flamefinance",
  },
  
];

export const langs: Language[] = [...Array(20)].map((_, i) => ({
  code: `en${i}`,
  language: `English${i}`,
  locale: `Locale${i}`,
}));
