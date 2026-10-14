import { useState, type FormEvent } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { userApi } from "@/api/user";

type User = {
  name?: string;
  email?: string;
  userid?: string;
};

export const WithoutUseActionSate = () => {
  const [user, setUser] = useState<User | null>(null);
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function fetchUser({
    userid,
    password,
  }: {
    userid: string;
    password: string;
  }) {
    setIsSubmitting(true);
    setError("");

    try {
      const data = await userApi({ userid, password });
      setUser(data.user);
    } catch (err) {
      setUser(null);
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setIsSubmitting(false);
    }
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await fetchUser({ userid: userId, password });
  };

  return (
    <div className="space-y-4">
      <h1>Without useActionState</h1>
      <form onSubmit={handleSubmit} className="space-y-3">
        <Input
          type="text"
          placeholder="User ID"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit"}
        </Button>
      </form>

      <div>
        {error ? <p className="text-red-500">{error}</p> : null}

        {user ? (
          <>
            <h1>User</h1>
            <h3>Welcome back, {user.name}</h3>
            <p>Email: {user.email}</p>
            <p>User ID: {user.userid}</p>
          </>
        ) : null}
      </div>
    </div>
  );
};
