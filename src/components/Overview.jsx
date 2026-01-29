import {
  Users,
  TrendingUp,
  Zap,
  BarChart,
  MessageSquare,
  ShieldCheck,
  CheckCircle,
  Target,
  Briefcase,
  Globe,
} from "lucide-react";

export default function Overview() {
  return (
    <div className="bg-[#111827]">
      {/* Hero Section */}
      <section className="bg-[#020617] text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Reliosa CRM – Quick, Simple, and Effective
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
          Reliosa empowers businesses to nurture customer relationships,
          accelerate sales, and make data-driven decisions—effortlessly, from a
          single platform.
        </p>
      </section>

      {/* Intro & What Reliosa Does */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed mb-6">
            Reliosa connects sales, marketing, and support for growing teams,
            ensuring every interaction is meaningful, measurable, and drives
            results.
          </p>
          <div className="bg-[#1F2937] p-8 rounded-2xl border border-gray-700 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-4">
              What Reliosa Does
            </h2>
            <p className="text-gray-300 mb-6">
              Reliosa handles the data and automation so your team can focus on
              what really matters—strong customer relationships and faster deal
              closures.
            </p>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              <div className="flex items-center gap-3">
                <CheckCircle className="text-[#D946EF] shrink-0" size={20} />
                <span className="text-gray-300">
                  Track leads and opportunities through the sales lifecycle to
                  keep your pipeline moving.
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="text-[#D946EF] shrink-0" size={20} />
                <span className="text-gray-300">
                  Manage customer interactions in real-time to keep your team
                  connected and productive.
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="text-[#D946EF] shrink-0" size={20} />
                <span className="text-gray-300">
                  Automate follow-ups, tasks, and sales pipelines to keep your
                  team focused on what matters most.
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="text-[#D946EF] shrink-0" size={20} />
                <span className="text-gray-300">
                  Gain visibility into performance with powerful analytics and
                  reporting to keep your team informed and aligned.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-10 text-center">
            Key Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[#1F2937] p-8 rounded-xl hover:shadow-lg transition-shadow border border-gray-700">
              <Users className="text-[#D946EF] mb-4" size={36} />
              <h3 className="text-xl font-bold text-white mb-3">
                Unified Customer Data
              </h3>
              <p className="text-gray-300">
                Access a complete, 360° view of every customer—contacts,
                communication history, deals, and support tickets—all in one
                place, so you can see the big picture.
              </p>
            </div>

            <div className="bg-[#1F2937] p-8 rounded-xl hover:shadow-lg transition-shadow border border-gray-700">
              <TrendingUp className="text-[#D946EF] mb-4" size={36} />
              <h3 className="text-xl font-bold text-white mb-3">
                Sales Pipeline Management
              </h3>
              <p className="text-gray-300">
                Visualize and manage your sales pipeline with customizable
                stages, deal tracking, and forecasting tools to keep your
                revenue predictable.
              </p>
            </div>

            <div className="bg-[#1F2937] p-8 rounded-xl hover:shadow-lg transition-shadow border border-gray-700">
              <Zap className="text-[#D946EF] mb-4" size={36} />
              <h3 className="text-xl font-bold text-white mb-3">
                Automation & Workflows
              </h3>
              <p className="text-gray-300">
                Reduce manual work with automated lead assignment, reminders,
                email sequences, and workflow triggers to keep your team focused
                on what matters most.
              </p>
            </div>

            <div className="bg-[#1F2937] p-8 rounded-xl hover:shadow-lg transition-shadow border border-gray-700">
              <BarChart className="text-[#D946EF] mb-4" size={36} />
              <h3 className="text-xl font-bold text-white mb-3">
                Analytics & Reporting
              </h3>
              <p className="text-gray-300">
                Make data-driven decisions with real-time dashboards, sales
                insights, and customizable reports to keep your team informed
                and aligned.
              </p>
            </div>

            <div className="bg-[#1F2937] p-8 rounded-xl hover:shadow-lg transition-shadow border border-gray-700">
              <MessageSquare className="text-[#D946EF] mb-4" size={36} />
              <h3 className="text-xl font-bold text-white mb-3">
                Team Collaboration
              </h3>
              <p className="text-gray-300">
                Keep teams aligned with shared notes, task assignments, and
                activity tracking across departments to keep your team connected
                and productive.
              </p>
            </div>

            <div className="bg-[#1F2937] p-8 rounded-xl hover:shadow-lg transition-shadow border border-gray-700">
              <ShieldCheck className="text-[#D946EF] mb-4" size={36} />
              <h3 className="text-xl font-bold text-white mb-3">
                Secure & Scalable
              </h3>
              <p className="text-gray-300">
                Reliosa is cloud-based, secure, and built to scale with your
                business as you grow, so you can focus on what really
                matters—growing your business.
              </p>
            </div>
          </div>
        </div>

        {/* Who Reliosa Is For & Why Choose */}
        <div className="grid md:grid-cols-2 gap-12 mb-20 items-stretch">
          {/* Who Reliosa Is For */}
          <div className="bg-[#1F2937] p-8 rounded-xl shadow-lg border border-gray-700 h-full">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Target className="text-[#D946EF]" /> Who Reliosa Is For
            </h2>
            <p className="text-gray-300 mb-6">Reliosa is designed for:</p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-[#D946EF] rounded-full mt-2"></div>
                <span className="text-gray-300">
                  Growing businesses that need a simple, scalable CRM
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-[#D946EF] rounded-full mt-2"></div>
                <span className="text-gray-300">
                  Sales teams that want to optimize their pipeline
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-[#D946EF] rounded-full mt-2"></div>
                <span className="text-gray-300">
                  Teams that value clear, actionable insights
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-[#D946EF] rounded-full mt-2"></div>
                <span className="text-gray-300">
                  Companies that value simplicity and ease of use
                </span>
              </li>
            </ul>
          </div>

          {/* Why Choose Reliosa */}
          <div className="bg-[#020617] text-white p-8 rounded-xl shadow-lg h-full border border-gray-800">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Briefcase className="text-[#D946EF]" /> Why Choose Reliosa?
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="text-[#D946EF] shrink-0" size={20} />
                <div>
                  <span className="font-bold block">Intuitive & Easy</span>
                  <span className="text-gray-300 text-sm">
                    Easy to learn and use
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-[#D946EF] shrink-0" size={20} />
                <div>
                  <span className="font-bold block">Customizable</span>
                  <span className="text-gray-300 text-sm">
                    Tailor the CRM to your workflow
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-[#D946EF] shrink-0" size={20} />
                <div>
                  <span className="font-bold block">Data-Driven</span>
                  <span className="text-gray-300 text-sm">
                    Convert data into actionable insights
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-[#D946EF] shrink-0" size={20} />
                <div>
                  <span className="font-bold block">Cloud-Based</span>
                  <span className="text-gray-300 text-sm">
                    Work from anywhere, anytime
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Conclusion / CTA */}
        <div className="text-center bg-[#1F2937] rounded-2xl p-12 border border-gray-700">
          <Globe className="text-[#D946EF] mx-auto mb-6" size={48} />
          <h2 className="text-3xl font-bold text-white mb-4">
            Grow Smarter, Faster
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Reliosa helps teams nurture customer relationships, accelerate deal
            closures, and drive smarter growth—all with simplicity.
          </p>
          <p className="text-lg font-bold text-[#D946EF]">
            Reliosa CRM — Turning Customer Intelligence into Results.
          </p>
        </div>
      </section>
    </div>
  );
}
