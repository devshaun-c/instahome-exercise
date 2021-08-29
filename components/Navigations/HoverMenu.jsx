import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import {
  Box,
  IconButton,
  Menu,
  MenuItem,
  MenuList,
  MenuDivider,
  MenuButton,
  useDisclosure,
  Collapse,
  Button,
  Text,
} from "@chakra-ui/react";
import { createUseStyles } from "react-jss";
import { useTheme } from "@emotion/react";
import { ChevronDownIcon, CloseIcon, HamburgerIcon } from "@chakra-ui/icons";

const useStyles = createUseStyles({
  menu: {},
  menuLinks: {
    display: "flex",
    "@media screen and (max-width: 1000px)": {
      display: "none",
    },
  },
});

const HoverMenu = (props) => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const router = useRouter();
  const { title, mainUrl = "/", items = [] } = props;
  const { isOpen, onToggle, onClose } = useDisclosure();
  const [showMenu, setShowMenu] = useState(false);

  const handleEnter = () => {
    setShowMenu(true);
  };

  const handleLeave = () => {
    setShowMenu(false);
  };

  const handleNav = (url) => {
    onClose();
    router.push(url);
  };

  return (
    <div onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
      <Menu isOpen={showMenu} gutter={2}>
        <MenuButton
          px={4}
          py={2}
          transition="all 0.2s"
          border="none"
          borderRadius="none"
          _hover={{}}
          fontSize="sm"
          _expanded={{}}
          _focus={{}}
          onClick={() => handleNav(mainUrl)}
          color={showMenu ? "brand.400" : ""}
        >
          {title} {items.length > 0 && <ChevronDownIcon />}
        </MenuButton>
        {items.length > 0 && (
          <MenuList borderRadius="none" p={0} fontSize="sm">
            {items.map((item, index) => (
              <MenuItem
                key={index}
                p="16px 24px"
                onClick={() => handleNav(item.url)}
              >
                {item.name}
              </MenuItem>
            ))}
          </MenuList>
        )}
      </Menu>
    </div>
  );
};

export default HoverMenu;
