import React from "react";
import Image from "next/image";

const socialMediaLinks = [
  {
    name: "Facebook",
    icon: "facebook",
    src: "/facebook.svg",
    alt: "Facebook logo",
    href: "https://www.facebook.com/jiri.zubryckyy/",
  },
  {
    name: "Instagram",
    icon: "instagram",
    src: "/instagram.svg",
    alt: "Instagram logo",
    href: "https://www.instagram.com/jirizubryckyj/",
  },
  {
    name: "GitHub",
    icon: "github",
    src: "/github.svg",
    alt: "GitHub logo",
    href: "https://github.com/skokann",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    src: "/linkedin.svg",
    alt: "LinkedIn logo",
    href: "https://www.linkedin.com/in/ji%C5%99%C3%AD-zubryckyj-0489172b5/",
  },
  {
    name: "Discord",
    icon: "discord",
    src: "/discord.svg",
    alt: "Discord logo",
    href: "https://discordapp.com/users/406492566427664384",
  },
];

const SocialMediaSection = () => {
  return (
    <div className="flex  justify-start  pt-2  ">
      {socialMediaLinks.map((link, index) => (
        <a key={index} href={link.href} className="w-auto">
          <Image src={link.src} alt={link.alt} width={50} height={50} />
        </a>
      ))}
    </div>
  );
};

export default SocialMediaSection;
