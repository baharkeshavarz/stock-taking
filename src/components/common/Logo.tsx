import { DEFAULT_LOGO_PATH } from "src/constants";

const Logo = (props: any) => {
  return (
    <img
      draggable={false}
      width={220}
      height={80}
      alt="انبارگردانی هایمارت"
      src={props?.src ?? DEFAULT_LOGO_PATH}
      {...props}
    />
  );
};

export default Logo;
