import Container from "@/components/container";

interface Footer {
  className?: string;
}

export default function Footer({ className }: Footer) {
  return (
    <footer className={className}>
      <Container className="flex items-center justify-center py-12">
        <span className="text-zinc-400">
          MIT &copy;{" "}
          <a
            href="https://github.com/sanal"
            className="transition-colors hover:text-green-700"
          >
            Sanal Tserenov
          </a>{" "}
          &mdash; {new Date().getFullYear()}
        </span>
      </Container>
    </footer>
  );
}
