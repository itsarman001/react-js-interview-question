import { Input } from "@/hooks/built-in/use-id/Input";

export const FormLayout = () => {
  return (
    <div className="mx-auto max-w-6xl space-y-6 px-4 py-8 sm:px-6">
      <h1>Form example useId</h1>
      <form>
        <Input label="Name" name="name" placeholder="Enter your name" />
        <Input
          label="Email"
          name="email"
          type="email"
          placeholder="Enter your email"
        />
        <Input
          label="Password"
          name="password"
          type="password"
          placeholder="Enter your password"
        />
        <Input
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          placeholder="Confirm your password"
        />
      </form>
    </div>
  );
};
