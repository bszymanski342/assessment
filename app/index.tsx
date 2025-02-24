import React, { useState } from "react";

import SignUpForm from "@/components/SignUpForm";

export default function App() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <SignUpForm showPassword={showPassword} setShowPassword={setShowPassword} />
  );
}
