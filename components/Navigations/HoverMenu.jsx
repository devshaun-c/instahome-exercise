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
  Link,
} from "@chakra-ui/react";
import { createUseStyles } from "react-jss";
import { useTheme } from "@emotion/react";
import { ChevronDownIcon, CloseIcon, HamburgerIcon } from "@chakra-ui/icons";

const useStyles = createUseStyles({});

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

  return (
    <div onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
      <Menu isOpen={showMenu} gutter={2}>
        <MenuButton
          as={Link}
          p={2}
          ml={3}
          transition="all 0.2s"
          border="none"
          borderRadius="none"
          _hover={{}}
          cursor="pointer"
          fontSize="sm"
          _expanded={{}}
          _focus={{}}
          href={mainUrl}
          color={showMenu ? "primary" : ""}
        >
          {title} {items.length > 0 && <ChevronDownIcon />}
        </MenuButton>
        {items.length > 0 && (
          <MenuList p={0} fontSize="sm" borderRadius="var(--border-radius)">
            {items.map((item, index) => (
              <MenuItem key={index} p="16px 24px" _hover={{ bg: "whitesmoke" }}>
                <Link
                  href={item.url}
                  cursor="pointer"
                  _hover={{ outline: "none" }}
                  rel="noopener,noreferrer"
                >
                  <Text flex="1" textAlign="left" fontSize="sm">
                    {item.name}
                  </Text>
                </Link>
              </MenuItem>
            ))}
          </MenuList>
        )}
      </Menu>
    </div>
  );
};

export default HoverMenu;
