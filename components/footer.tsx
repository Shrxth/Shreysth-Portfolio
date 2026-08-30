import React from "react";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; {new Date().getFullYear()} Shreysth Goyal. All rights reserved.
      </small>

      <p className="text-xs">
        AI Analyst focused on AI solutions, data, automation, and practical
        software development.
      </p>
    </footer>
  );
}