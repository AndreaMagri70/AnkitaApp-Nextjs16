import { LucideIcon } from "lucide-react"

export default function StasCard({
    icon: Icon,
    value,
    label,
}: {
    icon: LucideIcon;
    value: string;
    label: string;
}) {
    return (
        <div>
            <div className="flex items-center justify-center gap-2 ">
                <Icon className="size-5 text-primary/70" />
                <p className="text-3xl sm:text-4xl font-bold">
                    {value}</p>
            </div>
            <p className="text-sm text-muted-foreground">
                {label}</p>
        </div>
    );
}
