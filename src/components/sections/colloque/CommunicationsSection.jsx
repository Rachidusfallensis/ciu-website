import { Award, FileText, Search } from 'lucide-react';
import { cn } from '../../../utils/cn';

export default function CommunicationsSection({ projects }) {
    return (
        <section className="section-padding bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div>
                        <div className="flex items-center gap-3 mb-8">
                            <Award className="w-8 h-8 text-yellow-500" />
                            <h3 className="text-3xl font-bold text-slate-900">Projets Primés</h3>
                        </div>
                        <div className="space-y-4">
                            {projects.map((proj, idx) => (
                                <div key={idx} className="group bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition-all flex items-center gap-4">
                                    <div className={cn("px-3 py-1 rounded-lg text-sm font-bold whitespace-nowrap border", proj.color)}>
                                        {proj.position}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 text-lg group-hover:text-primary-600 transition-colors">{proj.title}</h4>
                                        <p className="text-sm text-slate-500 mt-1 font-medium">{proj.author}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center gap-3 mb-8">
                            <FileText className="w-8 h-8 text-primary-600" />
                            <h3 className="text-3xl font-bold text-slate-900">Communications</h3>
                        </div>
                        <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 text-center">
                            <p className="text-slate-600 mb-6 leading-relaxed">
                                Découvrez les travaux de recherche présentés lors du colloque. Les résumés sont disponibles en téléchargement.
                            </p>
                            <button className="inline-flex items-center px-6 py-3 bg-white text-slate-900 rounded-xl font-bold hover:bg-primary-50 hover:text-primary-600 transition-all shadow-sm border border-slate-200">
                                <Search className="mr-2 h-5 w-5" />
                                Explorer les travaux
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
