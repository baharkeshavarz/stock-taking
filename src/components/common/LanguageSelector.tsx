import LanguageIcon from "@mui/icons-material/Language";
import { IconButton, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import { languageMapper } from "src/i18n/languages";
import { useDispatch, useSelector } from "src/store";
import { onChangeLocalization } from "src/store/reducers/config";

function LanguageSelector() {
  const dispatch = useDispatch();
  const i18n = useSelector((state) => state.config.i18n);
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleToggle = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChangeLang = (symbol: string) => {
    dispatch(onChangeLocalization(symbol));
    handleClose();
  };
  const open = Boolean(anchorEl);

  return (
    <>
      <IconButton
        data-screenshot="toggle-language"
        onClick={handleToggle}
        disableRipple
        size="small"
        aria-controls={open ? "language-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
      >
        <LanguageIcon sx={{ width: "1.1rem", height: "1.1rem" }} />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        id="language-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        slotProps={{
          paper: {
            variant: "outlined",
            elevation: 0,
            sx: {
              my: "4px",
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        {Object.entries(languageMapper).map(([key, value]) => (
          <MenuItem
            key={key}
            selected={i18n === key}
            onClick={() => handleChangeLang(key)}
          >
            {value.name}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}

export default LanguageSelector;
