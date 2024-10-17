import { Suspense } from "react";

import { MainPage } from "@/pages/MainPage";

function App() {
  return (
    <div className={"app"}>
      <Suspense fallback="Loading user list...">
        <MainPage />
      </Suspense>
    </div>
  );
}

export default App;
