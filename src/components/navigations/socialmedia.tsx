"use client";

import React, { FC } from "react";
import { Whatsapp, Instagram, TikTok } from "../svgs";
import Tiktok from "../svgs/tiktok";

type SocialComponents = {
  style: string;
};

const SocialMediaComponents: FC<SocialComponents> = ({ style }) => {
  const socmed = [
    {
      id: 1,
      label: "whatsapp",
      link: "https://wa.me/6281238648127",
    },
    {
      id: 2,
      label: "tiktok",
      link: "https://www.tiktok.com/",
    },
    {
      id: 3,
      label: "instagram",
      link: "https://www.instagram.com/lefloriare/",
    },
  ];
  return socmed.map((item) => {
    switch (item.label) {
      case "whatsapp":
        return (
          <a key={item.id} className={style} href={item.link} target="_blank">
            <Whatsapp key={item.id} />
          </a>
        );
      case "instagram":
        return (
          <a key={item.id} className={style} href={item.link} target="_blank">
            <Instagram key={item.id} />
          </a>
        );
      case "tiktok":
        return (
          <a key={item.id} className={style} href={item.link} target="_blank">
            <Tiktok key={item.id} />
          </a>
        );
      default:
        return null;
    }
  });
};

export default SocialMediaComponents;
