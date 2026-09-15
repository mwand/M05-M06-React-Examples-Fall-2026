import * as React from "react";
import { useState, useEffect } from "react";

export function useFirstRender(action: () => void) {
  useEffect(() => {
    action();
  }, [action]);
}
