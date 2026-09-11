import { useState } from "react";
import "./PolicyDemo.css";

const policyTypes = [
  "General Liability",
  "Auto",
  "Workers Compensation",
  "Umbrella",
  "Inland Marine",
];

const policyData = {
  "General Liability": {
    prior: "$1,000,000",
    renewal: "$2,000,000",
    status: "Improved",
    message: "Renewal coverage limit is higher than the prior policy.",
  },
  Auto: {
    prior: "$500,000",
    renewal: "$500,000",
    status: "Matched",
    message: "Coverage limits match the prior policy.",
  },
  "Workers Compensation": {
    prior: "$1,000,000",
    renewal: "$1,000,000",
    status: "Matched",
    message: "Coverage limits match the prior policy.",
  },
  Umbrella: {
    prior: "$2,000,000",
    renewal: "$1,000,000",
    status: "Review",
    message: "Renewal coverage limit is lower than the prior policy.",
  },
  "Inland Marine": {
    prior: "$750,000",
    renewal: "$1,000,000",
    status: "Improved",
    message: "Renewal coverage limit is higher than the prior policy.",
  },
};

function PolicyDemo() {
  const [selectedPolicy, setSelectedPolicy] =
    useState("General Liability");
  const [isCompared, setIsCompared] = useState(false);

  const selectedData = policyData[selectedPolicy];

  return (
    <section className="policy-demo-section" id="policy-demo">
      <div className="policy-demo-container">
        <div className="policy-demo-heading">
          <div>
            <span className="section-kicker">Interactive demo</span>

            <h2>
              See how the policy workflow
              <span>behaves.</span>
            </h2>

            <p>
              Select an insurance line of business and compare prior and
              renewal coverage values through a simplified policy validation
              flow.
            </p>
          </div>

          <span className="demo-badge">Prototype</span>
        </div>

        <div className="policy-demo-card">
          <div className="policy-demo-toolbar">
            <div>
              <span className="demo-toolbar-label">POLICY VALIDATION SIMULATOR</span>
              <h3>Coverage comparison</h3>
            </div>

            <span className="demo-toolbar-status">
              <span />
              Ready
            </span>
          </div>

          <div className="policy-demo-content">
            <div className="policy-demo-controls">
              <label htmlFor="policy-type">Select line of business</label>

              <select
                id="policy-type"
                value={selectedPolicy}
                onChange={(event) => {
                  setSelectedPolicy(event.target.value);
                  setIsCompared(false);
                }}
              >
                {policyTypes.map((policyType) => (
                  <option value={policyType} key={policyType}>
                    {policyType}
                  </option>
                ))}
              </select>

              <button
                type="button"
                className="policy-compare-button"
                onClick={() => setIsCompared(true)}
              >
                Compare policies
                <span>↗</span>
              </button>

              <p className="policy-demo-note">
                This demo uses sample values and does not process real
                insurance documents.
              </p>
            </div>

            <div className="policy-comparison">
              <div className="policy-column">
                <div className="policy-column-header">
                  <span>Prior policy</span>
                  <span>01</span>
                </div>

                <div className="policy-value-card">
                  <span>Coverage limit</span>
                  <strong>{selectedData.prior}</strong>
                </div>

                <div className="policy-value-card">
                  <span>Policy type</span>
                  <strong>{selectedPolicy}</strong>
                </div>

                <div className="policy-value-card">
                  <span>Validation</span>
                  <strong>Pending</strong>
                </div>
              </div>

              <div className="policy-column">
                <div className="policy-column-header">
                  <span>Renewal policy</span>
                  <span>02</span>
                </div>

                <div className="policy-value-card">
                  <span>Coverage limit</span>
                  <strong>{selectedData.renewal}</strong>
                </div>

                <div className="policy-value-card">
                  <span>Policy type</span>
                  <strong>{selectedPolicy}</strong>
                </div>

                <div className="policy-value-card">
                  <span>Validation</span>
                  <strong>{isCompared ? selectedData.status : "Pending"}</strong>
                </div>
              </div>
            </div>
          </div>

          <div className={`policy-result ${isCompared ? "is-visible" : ""}`}>
            <div className="policy-result-icon">
              {isCompared ? "✓" : "?"}
            </div>

            <div className="policy-result-copy">
              <strong>
                {isCompared ? selectedData.status : "Waiting for comparison"}
              </strong>

              <span>
                {isCompared
                  ? selectedData.message
                  : "Choose a line of business and start the comparison."}
              </span>
            </div>

            <span className="policy-result-label">
              {isCompared ? "Checked" : "Not checked"}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PolicyDemo;