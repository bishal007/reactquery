// UserProfile.js
import { useQuery } from "react-query";
import { userData } from "./UserData";
import { LoadingSpinner } from "./LoadingSpinner";
import { ErrorMessage } from "./ErrorMessage";
import { UserDetails } from "./UserDetails";

function fetchUser(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userData[userId]) {
        resolve(userData[userId]);
      } else {
        reject(new Error("User not found"));
      }
    }, 1000); // Simulate network delay
  });
}

export function UserProfile({ userId }) {
  const { isLoading, error, data } = useQuery(["user", userId], () =>
    fetchUser(userId)
  );

  if (isLoading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error.message} />;

  return <UserDetails name={data.name} email={data.email} />;
}
