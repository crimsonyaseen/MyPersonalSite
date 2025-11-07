import BouncyText from "../BouncyText";

export default function BouncyTextExample() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <BouncyText 
        text="coming soon..." 
        className="text-6xl md:text-7xl lg:text-8xl font-extralight tracking-tight text-foreground"
      />
    </div>
  );
}
