export const Footer = () => {
  return (
    <footer className="mt-12 py-8 px-4 border-t border-border text-white flex flex-wrap justify-between items-center">
      <p className="text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} All rights reserved.
      </p>
    </footer>
  );
};
