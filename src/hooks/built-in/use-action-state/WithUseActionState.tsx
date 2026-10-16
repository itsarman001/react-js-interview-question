import { useActionState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { userApi } from "@/api/user";

type User = {
  name: string;
  email: string;
  userid: string;
};

type State = {
  user: User | null;
  error: string;
};

const initialState: State = {
  user: null,
  error: "",
};

async function loginAction(
  _prevState: State,
  formData: FormData,
): Promise<State> {
  const userid = formData.get("userid") as string;
  const password = formData.get("password") as string;

  try {
    const data = await userApi({ userid, password });

    return {
      user: data.user,
      error: "",
    };
  } catch (err) {
    return {
      user: null,
      error: err instanceof Error ? err.message : "Something went wrong",
    };
  }
}

export const WithUseActionState = () => {
  const [state, formAction, isPending] = useActionState(
    loginAction,
    initialState,
  );

  return (
    <div className="space-y-4">
      <h1>With useActionState</h1>
      <form action={formAction} className="space-y-3">
        <Input type="text" name="userid" placeholder="User ID" />

        <Input type="password" name="password" placeholder="Password" />

        <Button type="submit" disabled={isPending}>
          {isPending ? "Submitting..." : "Submit"}
        </Button>
      </form>

      {state.error && <p className="text-red-500">{state.error}</p>}

      {state.user && (
        <div>
          <h1>User</h1>
          <h3>Welcome back, {state.user.name}</h3>
          <p>Email: {state.user.email}</p>
          <p>User ID: {state.user.userid}</p>
        </div>
      )}
    </div>
  );
};
