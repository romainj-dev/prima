import NextLink from "next/link"
import React, { AnchorHTMLAttributes, forwardRef } from "react"
import clsx from "clsx"
import styles from "./Link.module.scss"
import { Text, TextProps } from "../typography/Text"

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  size?: TextProps["size"]
}

const isExternalUrl = (url: string) => /^(https?|mailto):\/\//.test(url)

function LinkComponent(
  { href, className, size = "m", children, ...props }: LinkProps,
  ref: React.ForwardedRef<HTMLAnchorElement>,
) {
  const isExternal = isExternalUrl(href)
  const isMailto = href.startsWith("mailto:")

  const content = (
    <Text
      size={size}
      as="span"
      color="primary"
      weight="medium"
      truncate
      underline
    >
      {children}
    </Text>
  )

  if (isExternal) {
    return (
      <a
        ref={ref}
        href={href}
        className={clsx(styles.link, className)}
        {...(!isMailto && { target: "_blank", rel: "noopener noreferrer" })}
        {...props}
      >
        {content}
      </a>
    )
  }

  return (
    <NextLink
      ref={ref}
      href={href}
      className={clsx(styles.link, className)}
      {...props}
    >
      {content}
    </NextLink>
  )
}

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(LinkComponent)

Link.displayName = "Link"
