import { Drawer, NavLink } from "@mantine/core";
import { MobileMenuProps } from "./MobileMenu.props";
import styles from "./MobileMenu.module.scss";
import { useLinksList } from "../../../helpers/hooks/useLinksList";

export const MobileMenu = ({ isOpened, onClose }: MobileMenuProps) => {
  const { linksList } = useLinksList();

  return (
    <Drawer opened={isOpened} onClose={onClose}>
      <div className={styles.wrapper}>
        {linksList.map((item) => (
          <NavLink
            key={item.id}
            label={item.name}
            variant="filled"
            className={styles.link}
            leftSection={item.icon}
            href={item.to}
          />
        ))}
      </div>
    </Drawer>
  );
};
