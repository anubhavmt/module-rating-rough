import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import environment from "./RelayEnvironment";
import { RelayEnvironmentProvider } from "react-relay";
import SummaryView from "./summarycomponent/SummaryView";
import HeaderView from "./headercomponent/HeaderView";
import CompletionView from "./completionview/CompletionView";
import EnableRating from "./enablerating/EnableRating";
import AdminUserDetail from "./AdminView/AdminUserDetail";
import { randomInt } from "crypto";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RelayEnvironmentProvider environment={environment}>
      <HeaderView overallrating={true} />
      <div className="summaryview">
        <SummaryView overallrating={true} />
      </div>
      <div className="completionview">
        <CompletionView overallrating={true} />
      </div>

      <div>
        <EnableRating />
      </div>

      <div>
        <AdminUserDetail
          username={"Anubhav Gupta"}
          useremail={"anubhav.gupta@mindtickle.com"}
        />
      </div>
    </RelayEnvironmentProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
