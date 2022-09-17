import React from "react";

type ProfileProps = {
  name?: string;
  age: number;
  status: "coder" | "developer" | "printer";
  children?:React.ReactNode
};

const Profile = ({ name, age, status, children }: ProfileProps) => {
  return (
    <div>
      <h1>
        hello brajesh {name || "none"} {age} {status} {children}
      </h1>
    </div>
  );
};

export default Profile;
