import { useSearchParams, useNavigate } from "react-router";
import { DEFAULT_START_ROUTE } from "src/constants";
import NotPermitted from "./components/NotPermitted";
import { useEffect } from "react";

const CreateUser = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const k = searchParams.get("k");

  useEffect(() => {
    if (k) {
      try {
        const metadata = JSON.parse(localStorage.getItem("metadata") || "{}");
        localStorage.setItem(
          "metadata",
          JSON.stringify({ ...metadata, key: k })
        );
      } catch {
        localStorage.setItem("metadata", JSON.stringify({ key: k }));
      }

      navigate(DEFAULT_START_ROUTE, { replace: true });
    }
  }, [k, navigate]);

  if (!k) {
    return <NotPermitted />;
  }

  return null;
};

export default CreateUser;
