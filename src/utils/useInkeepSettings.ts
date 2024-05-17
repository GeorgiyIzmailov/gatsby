import type {
    InkeepAIChatSettings,
    InkeepSearchSettings,
    InkeepWidgetBaseSettings,
    InkeepModalSettings,
  } from "@inkeep/widgets";
  
  type InkeepSharedSettings = {
    baseSettings: InkeepWidgetBaseSettings;
    aiChatSettings: InkeepAIChatSettings;
    searchSettings: InkeepSearchSettings;
    modalSettings: InkeepModalSettings;
  };
  
  const useInkeepSettings = (): InkeepSharedSettings => {
    const baseSettings: InkeepWidgetBaseSettings = {
      apiKey: "YOUR_API_KEY",
      integrationId: "YOUR_INTEGRATION_ID",
      organizationId: "YOUR_ORGANIZATION_ID",
      primaryBrandColor: "#26D6FF", // your brand color, widget color scheme is derived from this
      organizationDisplayName: "Inkeep",
      // ...optional settings
    };
  
    const modalSettings: InkeepModalSettings = {
      // optional settings
    };
  
    const searchSettings: InkeepSearchSettings = {
      // optional settings
    };
  
    const aiChatSettings: InkeepAIChatSettings = {
      // optional settings
      botAvatarSrcUrl: "/img/logo.svg", // use your own bot avatar
      quickQuestions: [
        "Example question 1?",
        "Example question 2?",
        "Example question 3?",
      ],
    };
  
    return { baseSettings, aiChatSettings, searchSettings, modalSettings };
  };
  
  export default useInkeepSettings;
  