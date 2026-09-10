"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { orderLinks } from "@/lib/site-data";

type NavLink = { href: string; label: string };

export default function MobileNav({ navLinks }: { navLinks: NavLink[] }) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Ensure portal only renders on client
  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const overlay = open ? (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 99999,
        backgroundColor: "#f8f5f0",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Header with close button */}
      <div
        style={{
          display: "flex",
          height: "5rem",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 1.5rem",
          flexShrink: 0,
        }}
      >
        <span className="font-display text-xl text-cab-red">
          BLACK CAB BURGER
        </span>
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Menü bezárása"
          style={{
            display: "flex",
            height: "2.5rem",
            width: "2.5rem",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "0.375rem",
            border: "1px solid rgba(26,26,26,0.2)",
            background: "transparent",
            cursor: "pointer",
          }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
            <path d="M1 1L15 15M15 1L1 15" stroke="currentColor" strokeWidth="2" />
          </svg>
        </button>
      </div>

      {/* Centered nav links */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "1.5rem",
        }}
      >
        <nav
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1.25rem",
          }}
          aria-label="Mobil navigáció"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-display"
              style={{
                fontSize: "1.75rem",
                fontWeight: 700,
                color: "#1a1a1a",
                textDecoration: "none",
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div
          style={{
            marginTop: "1rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.75rem",
            width: "100%",
            maxWidth: "16rem",
            padding: "0 2rem",
          }}
        >
          <a
            href={orderLinks.wolt}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "block",
              borderRadius: "9999px",
              backgroundColor: "#00c2e8",
              padding: "0.75rem 1rem",
              textAlign: "center",
              fontSize: "0.875rem",
              fontWeight: 600,
              color: "#fff",
              textDecoration: "none",
            }}
          >
            Rendelj Wolt-ról
          </a>
          <a
            href={orderLinks.foodora}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "block",
              borderRadius: "9999px",
              backgroundColor: "#d60265",
              padding: "0.75rem 1rem",
              textAlign: "center",
              fontSize: "0.875rem",
              fontWeight: 600,
              color: "#fff",
              textDecoration: "none",
            }}
          >
            Rendelj Foodora-ról
          </a>
        </div>
      </div>
    </div>
  ) : null;

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Menü megnyitása"
        aria-expanded={open}
        className="flex h-10 w-10 items-center justify-center rounded-md border border-ink/20"
      >
        <span className="sr-only">Menü</span>
        <svg width="20" height="14" viewBox="0 0 20 14" fill="none" aria-hidden>
          <path d="M0 1H20" stroke="currentColor" strokeWidth="2" />
          <path d="M0 7H20" stroke="currentColor" strokeWidth="2" />
          <path d="M0 13H20" stroke="currentColor" strokeWidth="2" />
        </svg>
      </button>

      {mounted && overlay && createPortal(overlay, document.body)}
    </div>
  );
}
