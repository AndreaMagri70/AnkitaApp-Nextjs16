import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";


export default function HeroSection() {
    return (
        <section className="relative overflow-hidden bg-linear-to-b 
        from-background via-background to-muted/20">
          <div className="wrapper">
            <Badge>Join thousands of creators sharing their work</Badge>
            <h1>Share What You've Built,Discover What's Launching</h1>
            <p>A community platform for creators to showcase their apps, AI tools, SaaS products,
                and creative projects. Authentic launches, real builders, genuine feedback.</p>
            <Button size={"lg"}>Share Your Project</Button>
            <Button size={"lg"}>Explore Projects</Button>
            </div>
        </section>
    )
}
