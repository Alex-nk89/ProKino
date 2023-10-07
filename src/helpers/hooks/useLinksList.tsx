import { IconMovie, IconDeviceTv, IconSearch } from "@tabler/icons-react";

export const useLinksList = () => {
  const linksList = [
    {
      id: 1,
      name: "Фильмы",
      to: "/",
      icon: <IconMovie />,
    },
    {
      id: 2,
      name: "Сериалы",
      to: "/",
      icon: <IconDeviceTv />,
    },
    {
      id: 3,
      name: "Поиск",
      to: "/",
      icon: <IconSearch />,
    },
  ];

  const desktopLinksList = linksList.filter((item) => item.name !== "Поиск");

  return { linksList, desktopLinksList };
};
