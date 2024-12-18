import EvrzLogo from "@/app/ui/evrz-logo";
import LoginForm from "@/app/ui/login-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login | Evrz",
};

export default function LoginPage() {
  return (
    <main className="flex items-center justify-center md:h-full ">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 sm:mt-14 mt-32">
        <div className="flex h-20 w-full items-end rounded-lg bg-teal-500 p-3 md:h-36">
          <div className="w-32 text-white md:w-36">
            <EvrzLogo />
          </div>
        </div>
        <LoginForm />
      </div>
    </main>
  );
}
