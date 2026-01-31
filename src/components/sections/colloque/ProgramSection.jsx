import { motion } from 'framer-motion';
import { useState } from 'react';
import { Users, BookOpen, Target, Award, FileText, Star, Clock, Mic } from 'lucide-react';
import { cn } from '../../../utils/cn';

export default function ProgramSection({ programData }) {
    const [selectedDay, setSelectedDay] = useState(0);
    const currentProgram = programData[selectedDay];

    const getSessionIcon = (type) => {
        switch (type) {
            case 'keynote': return Mic;
            case 'conference': return Users;
            case 'panel': return BookOpen;
            case 'workshop': return Target;
            case 'ceremony': return Award;
            case 'presentation': return FileText;
            case 'competition': return Star;
            default: return Clock;
        }
    };

    return (
        <section className="section-padding bg-slate-50">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4 text-slate-900">
                        <span className="text-primary-600">Programme</span> Détaillé
                    </h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        Trois journées intenses rythmées par des conférences, ateliers et moments de partage.
                    </p>
                </div>

                {/* Day Selector */}
                <div className="flex justify-center mb-12 bg-white p-2 rounded-full shadow-sm border border-slate-200 inline-flex mx-auto">
                    {programData.map((day, idx) => (
                        <button
                            key={idx}
                            onClick={() => setSelectedDay(idx)}
                            className={cn(
                                "px-8 py-3 rounded-full font-bold transition-all text-sm sm:text-base relative overflow-hidden",
                                selectedDay === idx
                                    ? "text-white shadow-md"
                                    : "text-slate-500 hover:text-slate-900"
                            )}
                        >
                            {selectedDay === idx && (
                                <motion.div
                                    layoutId="activeTab"
                                    className="absolute inset-0 bg-slate-900"
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                            <span className="relative z-10 flex flex-col items-center leading-tight">
                                <span>{day.day}</span>
                                <span className={cn("text-xs font-normal opacity-80", selectedDay === idx ? "text-slate-200" : "text-slate-400")}>{day.fullDate}</span>
                            </span>
                        </button>
                    ))}
                </div>

                {/* Timeline Content */}
                <div className="relative">
                    <div className="absolute left-8 top-0 bottom-0 w-px bg-slate-200 hidden md:block" />

                    <motion.div
                        key={selectedDay}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="space-y-6"
                    >
                        {currentProgram.sessions.map((session, idx) => {
                            const Icon = getSessionIcon(session.type);
                            return (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="relative pl-0 md:pl-20 group"
                                >
                                    {/* Timeline Dot */}
                                    <div className="absolute left-[30px] top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-4 border-white bg-primary-600 shadow-md z-10 hidden md:block group-hover:scale-125 transition-transform" />

                                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg hover:border-primary-100 transition-all flex flex-col sm:flex-row gap-6 items-center text-center sm:text-left">
                                        <div className="w-16 h-16 rounded-2xl bg-primary-50 text-primary-600 flex items-center justify-center flex-shrink-0 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
                                            <Icon className="w-7 h-7" />
                                        </div>
                                        <div className="flex-grow">
                                            <div className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-bold mb-2">
                                                {session.time}
                                            </div>
                                            <h3 className="text-lg font-bold text-slate-900 group-hover:text-primary-700 transition-colors">
                                                {session.title}
                                            </h3>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
