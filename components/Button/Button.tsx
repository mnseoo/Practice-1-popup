import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import "./Button.css";

export type ButtonVariant = "solid-primary" | "solid-weak" | "line" | "ghost";
export type ButtonSize = "xs" | "s" | "m" | "l" | "xl" | "2xl" | "3xl" | "4xl";

export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  iconOnly?: ReactNode;
  children?: ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    variant = "solid-primary",
    size = "m",
    leftIcon,
    rightIcon,
    iconOnly,
    children,
    className,
    type = "button",
    ...rest
  },
  ref,
) {
  const isIconOnly = iconOnly !== undefined && iconOnly !== null;

  const classes = [
    "bds-button",
    `bds-button--${variant}`,
    `bds-button--${size}`,
    isIconOnly ? "bds-button--icon-only" : null,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button ref={ref} type={type} className={classes} {...rest}>
      {isIconOnly ? (
        <span className="bds-button__icon" aria-hidden>
          {iconOnly}
        </span>
      ) : (
        <>
          {leftIcon && (
            <span className="bds-button__icon" aria-hidden>
              {leftIcon}
            </span>
          )}
          {children}
          {rightIcon && (
            <span className="bds-button__icon" aria-hidden>
              {rightIcon}
            </span>
          )}
        </>
      )}
    </button>
  );
});
