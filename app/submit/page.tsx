import SectionHeader from "@/components/common/section-header";
import ProductSubmitForm from "@/components/products/product-submit-form";
import { SparklesIcon } from "lucide-react";

export default function SubmitPage() {
    return (
        <section className="py-20">
            <div className="wrapper">
                <SectionHeader
                    title="Submit Your Project"
                    icon={SparklesIcon}
                    description="Share your creation with the community. Your submission wil be reviewed
        before going live."
                />
                <div className="max-w-2xl mx-auto">
                    <ProductSubmitForm />

                </div>
            </div>
        </section>
    );
}
