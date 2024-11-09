export default function Footer() {
    return (
      <footer className="mt-16 border-t border-border bg-background">
        <div className="container mx-auto px-4 py-8">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Bobby Scongack. All rights reserved.
          </p>
        </div>
      </footer>
    )
  }