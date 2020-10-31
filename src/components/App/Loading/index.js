import React from "react";
import { Spinner } from "reactstrap";

export default function Loading() {
  return (
    <div className="text-center mt-2">
      <Spinner color="primary" />
    </div>
  );
}
