import Link from "next/link";

export function Footer() {
  return (
    <div className="flex flex-col gap-4 mt-6">
      <h2 className="text-4xl text-highlight">
        Want to know more about me ? 😁
      </h2>
      <p className="text-2xl">
        Check out the about page{" "}
        <Link href="#">
          <span className="cursor-pointer text-accent-active hover:text-accent-hover">
            About
          </span>
        </Link>
      </p>
    </div>
  );
}
