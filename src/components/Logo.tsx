import { Link } from "react-router-dom";

interface LogoProps {
  variant?: "full" | "icon-only" | "text-only";
  size?: "sm" | "md" | "lg";
  className?: string;
  showLink?: boolean;
}

const sizeClasses = {
  sm: {
    container: "h-8",
    icon: "h-6 w-6",
    text: "text-lg",
  },
  md: {
    container: "h-10 md:h-12",
    icon: "h-7 w-7 md:h-8 md:w-8",
    text: "text-xl md:text-2xl",
  },
  lg: {
    container: "h-12 md:h-16",
    icon: "h-8 w-8 md:h-10 md:w-10",
    text: "text-2xl md:text-3xl",
  },
};

const Logo = ({
  variant = "full",
  size = "md",
  className = "",
  showLink = false,
}: LogoProps) => {
  const sizes = sizeClasses[size];

  const logoContent = (
    <div
      className={`flex items-center gap-2 md:gap-3 ${sizes.container} ${className}`}
    >
          {/* Icon */}
          {(variant === "full" || variant === "icon-only") && (
            <svg
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`${sizes.icon} flex-shrink-0`}
              aria-hidden="true"
            >
              {/* House Outline */}
              <path
                d="M24 4L6 18V42H18V28H30V42H42V18L24 4Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-[hsl(var(--terracotta))]"
              />
              {/* Hammer */}
              <path
                d="M32 22L28 26L24 22M28 26V34"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-[hsl(var(--terracotta))]"
              />
              <path
                d="M26 34H30"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                className="text-[hsl(var(--terracotta))]"
              />
              <path
                d="M24 14L22 12L20 14L18 12L16 14"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-[hsl(var(--terracotta))]"
              />
              {/* Accent dot */}
              <circle
                cx="24"
                cy="8"
                r="2"
                fill="currentColor"
                className="text-[hsl(var(--gold))]"
              />
            </svg>
          )}

      {/* Text */}
      {(variant === "full" || variant === "text-only") && (
        <span
          className={`${sizes.text} font-bold tracking-tight whitespace-nowrap`}
        >
          Material<span className="text-[hsl(var(--primary))]">Adda</span>
        </span>
      )}
    </div>
  );

  if (showLink || variant === "full") {
    return (
      <Link
        to="/"
        className="flex items-center gap-2 group"
        aria-label="Material Adda - Home"
      >
        {logoContent}
      </Link>
    );
  }

  return logoContent;
};

export default Logo;

