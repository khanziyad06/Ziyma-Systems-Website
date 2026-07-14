import React, { useEffect, useState } from "react";

const CONSENT_KEY = "ziyma_cookie_consent";

export const CookieConsent = ({
  onAccept,
  onDecline,
  privacyPolicyHref = "/privacy-policy",
}) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(CONSENT_KEY);
      if (!stored) {
        setVisible(true);
      }
    } catch {
      // localStorage unavailable (e.g. privacy mode) — show banner anyway
      setVisible(true);
    }
  }, []);

  const handleChoice = (choice) => {
    try {
      window.localStorage.setItem(CONSENT_KEY, choice);
    } catch {
      // ignore storage errors
    }
    setVisible(false);
    if (choice === "accepted") {
      onAccept?.();
    } else {
      onDecline?.();
    }
  };

  if (!visible) return null;

  return (
    <div style={styles.wrapper} role="dialog" aria-live="polite" aria-label="Cookie consent">
      <div style={styles.inner}>
        <p style={styles.text}>
          We use cookies only where necessary to run this site. We currently don't run any
          analytics or tracking tools — when we do, we'll only use them if you accept. See our{" "}
          <a href={privacyPolicyHref} style={styles.link}>
            Privacy Policy
          </a>{" "}
          for details.
        </p>
        <div style={styles.actions}>
          <button
            style={styles.declineBtn}
            onClick={() => handleChoice("declined")}
            type="button"
          >
            Decline
          </button>
          <button
            style={styles.acceptBtn}
            onClick={() => handleChoice("accepted")}
            type="button"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 9999,
    backgroundColor: "#142523",
    color: "#f5f5f5",
    padding: "16px 20px",
    boxShadow: "0 -2px 12px rgba(0,0,0,0.25)",
  },
  inner: {
    maxWidth: 960,
    margin: "0 auto",
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 16,
  },
  text: {
    margin: 0,
    fontSize: 14,
    lineHeight: 1.5,
    flex: "1 1 320px",
  },
  link: {
    color: "#9fe6c8",
    textDecoration: "underline",
  },
  actions: {
    display: "flex",
    gap: 10,
    flexShrink: 0,
  },
  declineBtn: {
    background: "transparent",
    border: "1px solid #f5f5f5",
    color: "#f5f5f5",
    borderRadius: 6,
    padding: "8px 16px",
    fontSize: 14,
    cursor: "pointer",
  },
  acceptBtn: {
    background: "#9fe6c8",
    border: "none",
    color: "#142523",
    borderRadius: 6,
    padding: "8px 16px",
    fontSize: 14,
    fontWeight: 600,
    cursor: "pointer",
  },
};
