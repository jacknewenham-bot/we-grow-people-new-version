import { useMemo, useState } from "react";
import { Check, CheckCircle2, ChevronDown, Sparkles } from "lucide-react";

type TrainingTrack = "sales" | "marketing" | "ai" | "operations" | "management";

type ModularTrainingBuilderProps = {
    defaultTrack?: TrainingTrack;
};

const TRACKS: { key: TrainingTrack; label: string }[] = [
    { key: "sales", label: "Sales" },
    { key: "marketing", label: "Marketing" },
    { key: "ai", label: "AI" },
    { key: "operations", label: "Operations" },
    { key: "management", label: "Management" }
];

const MODULES_BY_TRACK: Record<TrainingTrack, string[]> = {
    sales: [
        "Sales fundamentals",
        "Prospecting & pipeline",
        "Consultative selling",
        "Storytelling & pitching",
        "Key account management",
        "Customer success",
        "Social & digital selling"
    ],
    marketing: [
        "Marketing fundamentals",
        "Messaging & positioning",
        "Funnel strategy",
        "Content & campaigns",
        "Performance analytics",
        "Lifecycle & retention",
        "AI for marketing"
    ],
    ai: [
        "AI foundations",
        "Prompting for teams",
        "Workflow automation",
        "AI for decisions",
        "Responsible AI use",
        "Function-specific use cases",
        "Team adoption playbook"
    ],
    operations: [
        "Process fundamentals",
        "Workflow mapping",
        "Ownership clarity",
        "Cross-team handoffs",
        "Execution cadence",
        "Operational metrics",
        "Continuous improvement"
    ],
    management: [
        "Management foundations",
        "Goal setting & alignment",
        "Coaching conversations",
        "Feedback & accountability",
        "Decision making",
        "Conflict management",
        "Leading through change"
    ]
};

const createInitialSelection = () =>
    (Object.keys(MODULES_BY_TRACK) as TrainingTrack[]).reduce(
        (acc, track) => ({
            ...acc,
            [track]: MODULES_BY_TRACK[track].slice(0, 3)
        }),
        {} as Record<TrainingTrack, string[]>
    );

export const ModularTrainingBuilder = ({ defaultTrack = "sales" }: ModularTrainingBuilderProps) => {
    const [activeTrack, setActiveTrack] = useState<TrainingTrack>(defaultTrack);
    const [selectedByTrack, setSelectedByTrack] = useState<Record<TrainingTrack, string[]>>(createInitialSelection);

    const activeModules = MODULES_BY_TRACK[activeTrack];
    const selectedModules = useMemo(() => selectedByTrack[activeTrack] ?? [], [activeTrack, selectedByTrack]);

    const toggleModule = (module: string) => {
        setSelectedByTrack((prev) => {
            const selected = prev[activeTrack] ?? [];
            const exists = selected.includes(module);
            return {
                ...prev,
                [activeTrack]: exists ? selected.filter((item) => item !== module) : [...selected, module]
            };
        });
    };

    return (
        <div className="rounded-[2.25rem] border border-border bg-white p-6 md:p-10 lg:p-12 shadow-[0_18px_38px_rgba(19,24,42,0.08)]">
            <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-12 items-start">
                <div className="lg:pr-4">
                    <h2 className="headline-display text-4xl md:text-5xl leading-[0.95] mb-6">
                        Modular training, built around your needs
                    </h2>
                    <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                        No generic courses. No wasted time.
                        <br />
                        Your programme is built from focused modules chosen around your team, goals, and reality.
                    </p>

                    <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-3">
                        {TRACKS.map((track) => (
                            <button
                                key={track.key}
                                type="button"
                                onClick={() => setActiveTrack(track.key)}
                                className={`rounded-full px-4 py-2.5 text-sm font-bold border transition-all duration-200 ${
                                    activeTrack === track.key
                                        ? "bg-primary text-white border-primary shadow-sm"
                                        : "bg-muted/30 text-primary border-border hover:bg-lime/15"
                                }`}
                            >
                                {track.label}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="rounded-3xl border border-border/70 bg-gradient-to-br from-[#edf2ff] via-[#f5f8ff] to-[#eef7f2] p-4 md:p-6">
                    <div className="grid xl:grid-cols-[1.08fr_0.92fr] gap-4 md:gap-6">
                        <div className="rounded-[2rem] bg-primary p-5 md:p-6 text-white border border-primary/80 shadow-[0_18px_30px_rgba(12,24,18,0.22)]">
                            <h3 className="text-center text-2xl md:text-3xl font-black mb-4">Training Programme</h3>

                            <div className="mx-auto max-w-[320px] rounded-full bg-white text-primary border border-white/80 px-3 py-2 flex items-center justify-between mb-5">
                                <span className="font-semibold">Selected Programme</span>
                                <span className="inline-flex items-center gap-1 text-sm font-bold">
                                    {TRACKS.find((track) => track.key === activeTrack)?.label}
                                    <ChevronDown className="w-4 h-4" />
                                </span>
                            </div>

                            <div className="rounded-2xl bg-white/10 border border-white/20 p-3 md:p-4">
                                <div className="mb-3 flex items-center justify-between">
                                    <span className="text-xs font-black uppercase tracking-[0.12em] text-white/80">Selected modules</span>
                                    <span className="text-xs font-bold rounded-full bg-white/20 px-2 py-0.5">{selectedModules.length}</span>
                                </div>

                                {selectedModules.length > 0 ? (
                                    <div className="space-y-2 max-h-[340px] overflow-y-auto pr-1">
                                        {selectedModules.map((module) => (
                                            <div
                                                key={module}
                                                className="rounded-xl px-3 py-2.5 bg-white text-primary border border-white/90 flex items-start gap-2.5"
                                            >
                                                <CheckCircle2 className="w-4 h-4 text-lime shrink-0 mt-0.5" />
                                                <span className="text-sm font-semibold leading-snug break-words">{module}</span>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="h-full min-h-[150px] rounded-xl border border-dashed border-white/35 flex items-center justify-center text-center px-4">
                                        <p className="text-sm text-white/80">Tick modules on the right to build your programme.</p>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="rounded-3xl bg-white/75 border border-white/90 p-3 md:p-4">
                            <p className="text-xs font-black uppercase tracking-[0.14em] text-primary/70 mb-3">Available modules</p>
                            <div className="space-y-2">
                                {activeModules.map((module) => {
                                    const checked = selectedModules.includes(module);
                                    return (
                                        <button
                                            key={module}
                                            type="button"
                                            onClick={() => toggleModule(module)}
                                            className={`w-full text-left rounded-full px-3 py-2.5 text-sm font-semibold border transition-all duration-200 flex items-center gap-2.5 ${
                                                checked
                                                    ? "bg-primary text-white border-primary shadow-sm"
                                                    : "bg-white/95 text-primary border-border/80 hover:bg-lime/15"
                                            }`}
                                        >
                                            <span
                                                className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${
                                                    checked ? "border-white/90 bg-lime text-primary" : "border-primary/30"
                                                }`}
                                            >
                                                {checked ? <Check className="w-3.5 h-3.5" /> : <Sparkles className="w-3 h-3 text-primary/60" />}
                                            </span>
                                            <span>{module}</span>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
