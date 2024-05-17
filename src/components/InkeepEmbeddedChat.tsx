import * as React from 'react';
import { ReactNode, useEffect, useState } from "react";
import useInkeepSettings from "../utils/useInkeepSettings";
import type { InkeepEmbeddedChatProps } from "@inkeep/widgets";

export default function InkeepEmbeddedChat() {
  const [EmbeddedChat, setEmbeddedChat] =
    useState<(e: InkeepEmbeddedChatProps) => JSX.Element | ReactNode>();

  const { baseSettings, aiChatSettings } = useInkeepSettings();

  // load the library asynchronously
  useEffect(() => {
    const loadEmbeddedChat = async () => {
      try {
        const { InkeepEmbeddedChat } = await import("@inkeep/widgets");
        setEmbeddedChat(() => InkeepEmbeddedChat);
      } catch (error) {
        console.error("Failed to load EmbeddedChat:", error);
      }
    };

    loadEmbeddedChat();
  }, []);

  const embeddedChatProps: InkeepEmbeddedChatProps = {
    baseSettings,
    aiChatSettings,
  };

  return EmbeddedChat && <EmbeddedChat {...embeddedChatProps} />;
}
