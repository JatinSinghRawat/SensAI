import {getAllCompanions} from "@/lib/actions/companion.actions";
import CompanionCard from "@/components/CompanionCard";
import {getSubjectColor} from "@/lib/utils";
import SearchInput from "@/components/SearchInput";
import SubjectFilter from "@/components/SubjectFilters";

const CompanionsLibrary = async ({ searchParams }: SearchParams) => {
    const filters = await searchParams;
    const subject = filters.subject ? filters.subject : '';
    const topic = filters.topic ? filters.topic : '';

    const companions = await getAllCompanions({ subject, topic });

    return (
        <main className="w-full px-4 sm:px-8 flex flex-col gap-6">
            <section className="w-full flex flex-col-reverse items-start gap-4 sm:flex-row sm:items-center sm:justify-between w-full">
                <h1 className="text-xl font-bold whitespace-nowrap">Companion Library</h1>
                <div className="flex flex-col gap-2 sm:flex-row sm:gap-4 w-full sm:w-auto">
                    <SearchInput />
                    <SubjectFilter />
                </div>
            </section>
            <section className="companions-grid">
                {companions.map((companion) => (
                    <CompanionCard
                        key={companion.id}
                        {...companion}
                        color={getSubjectColor(companion.subject)}
                    />
                ))}
            </section>
        </main>
    )
}

export default CompanionsLibrary