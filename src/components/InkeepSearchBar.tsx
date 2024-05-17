import * as React from "react";
import { useEffect, useState } from "react";
import useInkeepSettings from "../utils/useInkeepSettings";
import type { InkeepSearchBarProps } from "@inkeep/widgets";

export default function InkeepSearchBar() {
  const [SearchBar, setSearchBar] =
    useState<(e: InkeepSearchBarProps) => JSX.Element>();

  const { baseSettings, aiChatSettings, searchSettings, modalSettings } =
    useInkeepSettings();

  // load the library asynchronously
  useEffect(() => {
    const loadSearchBar = async () => {
      try {
        const { InkeepSearchBar } = await import("@inkeep/widgets");
        setSearchBar(() => InkeepSearchBar);
      } catch (error) {
        console.error("Failed to load SearchBar:", error);
      }
    };

    loadSearchBar();
  }, []);

  const searchBarProps: InkeepSearchBarProps = {
    // stylesheetUrls: ['/path/to/stylesheets'], // optional
    baseSettings,
    aiChatSettings,
    searchSettings,
    modalSettings,
  };

  return SearchBar && <SearchBar {...searchBarProps} />;
}
