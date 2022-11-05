import Link from "next/link";
import { useRouter } from "next/router";
import { StyledNavLink } from "../styles/Elements.styles";

export default function CLink({ className, text, href, ...rest }) {
  const router = useRouter();
  return (
    <Link href={href} passHref>
      <StyledNavLink pathName={router.pathname} className={className}>
        {text}
      </StyledNavLink>
    </Link>
  );
}
