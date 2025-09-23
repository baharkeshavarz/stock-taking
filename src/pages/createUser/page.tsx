// import { useSearchParams, useNavigate } from "react-router";
// import { DEFAULT_STOCK_KEEPER_ROUTE } from "src/constants";
// import NotPermitted from "./components/NotPermitted";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import LoadingComponent from "src/components/common/LoadingComponent";
import { DEFAULT_STOCK_KEEPER_ROUTE } from "src/constants";

const CreateUser = () => {
  const navigate = useNavigate();
  // const [searchParams] = useSearchParams();
  // const k = searchParams.get("k");

  useEffect(() => {
    localStorage.setItem(
      "metadata",
      JSON.stringify({ key: "AE23213C7B130F9D756549C05A0B9733" })
    );
    navigate(DEFAULT_STOCK_KEEPER_ROUTE, { replace: true });
  }, []);

  // useEffect(() => {
  //   if (k) {
  //     try {
  //       const metadata = JSON.parse(localStorage.getItem("metadata") || "{}");
  //       localStorage.setItem(
  //         "metadata",
  //         JSON.stringify({ ...metadata, key: k })
  //       );
  //     } catch {
  //       localStorage.setItem("metadata", JSON.stringify({ key: k }));
  //     }

  //     navigate(DEFAULT_STOCK_KEEPER_ROUTE, { replace: true });
  //   }
  // }, [k, navigate]);

  // if (!k) {
  //   return <NotPermitted />;
  // }

  return <LoadingComponent />;
};

export default CreateUser;
