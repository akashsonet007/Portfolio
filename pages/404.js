import { useRouter } from "next/router";
import { useEffect } from "react";
export default function ErrorPage() {
  const router = useRouter();

  const handleBack = () => {
    router.push("/");
  };
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 2000);
  }, []);

  return (
    <>
      <div id="notfound">
        <div className="notfound">
          <div className="notfound-404">
            <h1>404</h1>
          </div>
          <h2>We are sorry, Page not found! </h2>
          <p>
            The page you are looking for might have been removed, had its name
            changed or is temporarily unavailable.
          </p>

          <a onClick={handleBack}>Back To Home Page</a>
        </div>
      </div>
    </>
  );
}
