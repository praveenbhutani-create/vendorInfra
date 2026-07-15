import { FormEvent, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronDown,
  Mail,
  Send,
  Sparkles,
  Upload,
  Users,
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/layout/PageHero";
import { usePageSeo } from "@/lib/seo";
import { siteButtonClasses } from "@/components/SiteButton";

const culturePoints = [
  {
    title: "Growth-oriented culture",
    text: "We invest in our people through hands-on learning, mentorship, and clear paths for advancement.",
    icon: Sparkles,
  },
  {
    title: "Collaborative environment",
    text: "Every team member's voice is heard. We believe the best ideas can come from anyone, at any level.",
    icon: Users,
  },
  {
    title: "Performance-driven",
    text: "Hard work and results are recognized and rewarded, not overlooked.",
    icon: CheckCircle2,
  },
  {
    title: "Stability with opportunity",
    text: "Join an established, reputable business while still having the chance to make a visible impact.",
    icon: BriefcaseBusiness,
  },
];

type JobOpening = {
  title: string;
  location: string;
  type: string;
  overview?: string;
  responsibilities?: string[];
  requiredSkills?: string[];
  experience?: string[];
  portfolio?: string[];
  portfolioNote?: string;
};

const openings: JobOpening[] = [
  // {
  //   title: "Sales Executive / Senior Sales Executive",
  //   location: "Gurugram (On-site)",
  //   type: "Full-time",
  // },
  {
    title: "Digital Marketing Executive (Graphic Design & Social Media Specialisation)",
    location: "Gurugram (On-site)",
    type: "Full-Time",
    overview:
      "We are looking for a creative, passionate, and detail-oriented Digital Marketing Executive (Graphic Design & Social Media Specialisation) with 1–2 years of experience to join our marketing team. The ideal candidate should have expertise in graphic design, video creation, and social media management, with the ability to transform ideas into engaging visual content that strengthens our brand presence and drives audience engagement. This role requires someone who can independently create compelling graphics, create & edit professional-quality videos, manage social media content, and contribute creative ideas for branding and marketing campaigns.",
    responsibilities: [
      "Design high-quality creatives, including social media posts, banners, brochures, presentations, infographics, flyers, advertisements, website graphics, landing page assets, blog visuals, email creatives, and other marketing collateral.",
      "Create and edit engaging short-form videos, reels, promotional videos, corporate videos, product videos, motion graphics, and multimedia content by incorporating animations, transitions, subtitles, sound effects, and music.",
      "Capture and edit office, event, product, client, and interview videos when required, ensuring all content is optimized for LinkedIn, Instagram, Facebook, YouTube, and X.",
      "Plan, create, schedule, and publish engaging social media content while maintaining a consistent brand identity and visual language across all digital and print channels.",
      "Develop creative concepts, campaign visuals, storytelling content, and monthly content calendars aligned with branding, product marketing, and business objectives.",
      "Ensure all creative assets meet quality standards, brand guidelines, and project timelines.",
      "Stay updated with the latest design trends, video editing techniques, AI-powered creative tools, social media algorithms, and emerging content formats to continuously improve creative output and audience engagement.",
    ],
    requiredSkills: [
      "Strong proficiency in Adobe Photoshop, Adobe Illustrator, Canva, and Figma.",
      "Hands-on experience with Adobe Premiere Pro, After Effects, CapCut, DaVinci Resolve, Filmora, or similar video editing software.",
      "Strong understanding of graphic design principles, branding, typography, color theory, layout design, and visual storytelling.",
      "Experience creating social media creatives, marketing collateral, presentations, and digital assets.",
      "Ability to create engaging reels, promotional videos, motion graphics, and short-form video content.",
      "Experience managing content across LinkedIn, Instagram, Facebook, YouTube, and X.",
      "Familiarity with AI-powered creative tools such as Adobe Firefly, Canva AI, Midjourney, or similar is an added advantage.",
      "Excellent creativity, communication, time management, and attention to detail.",
    ],
    experience: [
      "1–2 years of professional experience in Graphic Design, Video Editing, and Social Media Content Creation.",
      "Experience working in a startup, digital marketing agency, or corporate marketing team is preferred.",
      "Bachelor's degree or diploma in Graphic Design, Multimedia, Fine Arts, Mass Communication, Marketing, or a related field is preferred.",
    ],
    portfolio: [
      "Graphic Design projects",
      "Social Media Creatives",
      "Branding & Marketing Collateral",
      "Video Editing & Motion Graphics",
      "Reels, Promotional Videos, and Corporate Videos",
    ],
    portfolioNote: "Applications without a portfolio may not be considered.",
  },
];

const positions = [
  "Sales Executive",
  "Sr. Sales Executive",
  "Social Media Executive",
  "Other",
];

export default function Career() {
  usePageSeo(
    "Career at Vendor Infra | Join Our Team",
    "Explore current openings at Vendor Infra and apply to build your career with a growth-oriented infrastructure technology company."
  );

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function toggleOpening(index: number) {
    setOpenIndex((prev) => (prev === index ? null : index));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");
    setSubmitted(false);

    const form = event.currentTarget;

    try {
      const res = await fetch("/api/career", {
        method: "POST",
        body: new FormData(form),
      });
      const data = await res.json().catch(() => ({}));

      if (!res.ok) throw new Error(data.error ?? "Unable to send application.");

      setSubmitted(true);
      form.reset();
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : "Could not send your application. Please call us or try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <div className="fixed right-0 top-0 h-full w-[18px] bg-[#00274d] z-50 pointer-events-none" />
      <Navbar />

      <PageHero
        eyebrow="Career"
        title="A place to build, grow, and succeed — together."
      />

      <main className="flex-1 bg-gradient-to-b from-[#f6f8fb] via-white to-[#f6f8fb]">
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-14 items-start">
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="lg:sticky lg:top-28"
              >
                <span className="inline-flex items-center gap-3 text-[#edad1a] text-[12px] font-bold uppercase tracking-[0.3em] mb-4">
                  <span className="w-8 h-px bg-[#edad1a]/60" />
                  Join the team
                  <span className="w-8 h-px bg-[#edad1a]/60" />
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-[#00274d] leading-tight mb-5">
                  Your work should feel visible, valued, and useful.
                </h2>
                <p className="text-gray-600 leading-relaxed mb-5">
                  At Vendor Infra, our people are the foundation of everything we build. We are always looking for driven, talented individuals who want to grow with a company that values initiative, integrity, and innovation.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  If you are looking for a workplace where your contributions matter and your career can genuinely progress, explore our current openings below.
                </p>
              </motion.div>

              <div className="grid sm:grid-cols-2 gap-2">
                {culturePoints.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.article
                      key={item.title}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="bg-white border border-[#00274d] rounded-2xl p-6 shadow-sm hover:shadow-lg hover:shadow-[#00274d]/10 transition-all"
                    >
                      <div className="w-12 h-12 rounded-xl bg-[#00274d]/5 text-[#00274d] flex items-center justify-center mb-5">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h4 className="text-lg font-bold text-[#00274d] mb-2">{item.title}</h4>
                      <p className="text-sm text-gray-600 leading-relaxed">{item.text}</p>
                    </motion.article>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid lg:grid-cols-[1fr_380px] gap-8 items-start">
              <div>
                <span className="inline-flex items-center gap-3 text-[#edad1a] text-[12px] font-bold uppercase tracking-[0.3em] mb-4">
                  <span className="w-8 h-px bg-[#edad1a]/60" />
                  Current openings
                  <span className="w-8 h-px bg-[#edad1a]/60" />
                </span>

                <h2 className="text-3xl md:text-4xl font-bold text-[#00274d] leading-tight mb-8">
                  Roles we are hiring for
                </h2>

                <div className="space-y-4">
                  {openings.map((opening, index) => {
                    const isOpen = openIndex === index;
                    const hasDetails = Boolean(opening.overview);

                    return (
                      <motion.div
                        key={opening.title}
                        initial={{ opacity: 0, x: -14 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        className={`rounded-2xl border border-l-4 border-gray-200 border-l-[#00274d] bg-[#f8fafc] transition-all ${
                          isOpen ? "bg-white shadow-md border-[#edad1a]/60" : "hover:border-[#edad1a]/70 hover:bg-white hover:shadow-md"
                        }`}
                      >
                        <button
                          type="button"
                          onClick={() => hasDetails && toggleOpening(index)}
                          aria-expanded={isOpen}
                          className={`group flex w-full items-center gap-5 p-5 md:p-6 text-left ${
                            hasDetails ? "cursor-pointer" : "cursor-default"
                          }`}
                        >
                          <span
                            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-white transition-colors ${
                              isOpen ? "bg-[#edad1a]" : "bg-[#00274d] group-hover:bg-[#edad1a]"
                            }`}
                          >
                            <BriefcaseBusiness className="w-5 h-5" />
                          </span>
                          <div className="min-w-0 flex-1">
                            <p className="font-bold text-[#00274d] text-lg leading-snug">{opening.title}</p>
                            <p className="text-sm text-gray-500 mt-1">
                              {opening.type} role at Vendor Infra · {opening.location}
                            </p>
                          </div>
                          {hasDetails && (
                            <ChevronDown
                              className={`w-5 h-5 shrink-0 text-[#00274d] transition-transform duration-300 ${
                                isOpen ? "rotate-180 text-[#edad1a]" : ""
                              }`}
                            />
                          )}
                        </button>

                        <AnimatePresence initial={false}>
                          {isOpen && hasDetails && (
                            <motion.div
                              key="content"
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3, ease: "easeInOut" }}
                              className="overflow-hidden"
                            >
                              <div className="px-5 pb-6 md:px-6 md:pb-8 border-t border-gray-200 pt-5">
                                {opening.overview && (
                                  <p className="text-sm text-gray-600 leading-relaxed mb-5">
                                    {opening.overview}
                                  </p>
                                )}

                                {opening.responsibilities && (
                                  <div className="mb-5">
                                    <h5 className="text-sm font-bold text-[#00274d] mb-2 uppercase tracking-wide">
                                      Key Responsibilities
                                    </h5>
                                    <ul className="space-y-2">
                                      {opening.responsibilities.map((item) => (
                                        <li key={item} className="flex gap-2 text-sm text-gray-600 leading-relaxed">
                                          <span className="text-[#edad1a] mt-1">•</span>
                                          <span>{item}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                )}

                                {opening.requiredSkills && (
                                  <div className="mb-5">
                                    <h5 className="text-sm font-bold text-[#00274d] mb-2 uppercase tracking-wide">
                                      Required Skills
                                    </h5>
                                    <ul className="space-y-2">
                                      {opening.requiredSkills.map((item) => (
                                        <li key={item} className="flex gap-2 text-sm text-gray-600 leading-relaxed">
                                          <span className="text-[#edad1a] mt-1">•</span>
                                          <span>{item}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                )}

                                {opening.experience && (
                                  <div className="mb-5">
                                    <h5 className="text-sm font-bold text-[#00274d] mb-2 uppercase tracking-wide">
                                      Experience
                                    </h5>
                                    <ul className="space-y-2">
                                      {opening.experience.map((item) => (
                                        <li key={item} className="flex gap-2 text-sm text-gray-600 leading-relaxed">
                                          <span className="text-[#edad1a] mt-1">•</span>
                                          <span>{item}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                )}

                                {opening.portfolio && (
                                  <div>
                                    <h5 className="text-sm font-bold text-[#00274d] mb-2 uppercase tracking-wide">
                                      Portfolio Required
                                    </h5>
                                    <p className="text-sm text-gray-600 leading-relaxed mb-2">
                                      Applicants must submit a portfolio showcasing:
                                    </p>
                                    <ul className="space-y-2 mb-3">
                                      {opening.portfolio.map((item) => (
                                        <li key={item} className="flex gap-2 text-sm text-gray-600 leading-relaxed">
                                          <span className="text-[#edad1a] mt-1">•</span>
                                          <span>{item}</span>
                                        </li>
                                      ))}
                                    </ul>
                                    {opening.portfolioNote && (
                                      <p className="text-sm font-semibold text-[#00274d]">
                                        {opening.portfolioNote}
                                      </p>
                                    )}
                                  </div>
                                )}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              <aside className="rounded-2xl overflow-hidden text-white p-6 shadow-xl shadow-[#00274d]/15 bg-[#00274d]">
                <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center mb-5">
                  <Mail className="w-6 h-6 text-[#edad1a]" />
                </div>
                <h3 className="text-xl font-bold mb-3">How to apply</h3>
                <p className="text-white/80 text-sm leading-relaxed mb-5">
                  Send your updated CV along with your portfolio, if applicable, to our HR team.
                </p>
                <a
                  href="mailto:hrhelpdesk@vendorinfra.com"
                  className="inline-flex items-center gap-2 text-[#edad1a] font-bold break-all"
                >
                  hrhelpdesk@vendorinfra.com <ArrowRight className="w-4 h-4 shrink-0" />
                </a>
                <p className="text-white/70 text-sm leading-relaxed mt-5">
                  Please mention the position you are applying for in the subject line, such as "Application for Sales Executive" or "Application for Social Media Executive".
                </p>
              </aside>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-12">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-10">
              <span className="inline-flex items-center gap-3 text-[#edad1a] text-[12px] font-bold uppercase tracking-[0.3em] mb-4">
                <span className="w-8 h-px bg-[#edad1a]/60" />
                Apply now
                <span className="w-8 h-px bg-[#edad1a]/60" />
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#00274d] leading-tight">
                Share your CV/Resume
              </h2>
              <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                Use this form to submit your application. Our HR team will review your profile and get in touch if there is a match.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-[#00274d] shadow-xl shadow-[#00274d]/10 p-5 md:p-8">
              <div className="grid md:grid-cols-2 gap-5">

                {/* 1. Full Name — required */}
                <label className="block">
                  <span className="block text-sm font-semibold text-[#00274d] mb-2">
                    Full Name <span className="text-[#00274d]">*</span>
                  </span>
                  <input
                    required
                    name="name"
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-[#edad1a] focus:ring-4 focus:ring-[#edad1a]/10"
                  />
                </label>

                {/* 2. Email Address — required */}
                <label className="block">
                  <span className="block text-sm font-semibold text-[#00274d] mb-2">
                    Email Address <span className="text-[#00274d]">*</span>
                  </span>
                  <input
                    required
                    type="email"
                    name="email"
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-[#edad1a] focus:ring-4 focus:ring-[#edad1a]/10"
                  />
                </label>

                {/* 3. Phone Number — required */}
                <label className="block">
                  <span className="block text-sm font-semibold text-[#00274d] mb-2">
                    Phone Number <span className="text-[#00274d]">*</span>
                  </span>
                  <input
                    required
                    type="tel"
                    name="phone"
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-[#edad1a] focus:ring-4 focus:ring-[#edad1a]/10"
                  />
                </label>

                {/* 4. Position Applying For — required */}
                <label className="block">
                  <span className="block text-sm font-semibold text-[#00274d] mb-2">
                    Position Applying For <span className="text-[#00274d]">*</span>
                  </span>
                  <input
                    required
                    name="position"
                    placeholder="e.g. Sales Executive"
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-[#edad1a] focus:ring-4 focus:ring-[#edad1a]/10"
                  />
                </label>

                {/* 5. Years of Experience — required */}
                <label className="block">
                  <span className="block text-sm font-semibold text-[#00274d] mb-2">
                    Years of Experience <span className="text-[#00274d]">*</span>
                  </span>
                  <input
                    required
                    type="number"
                    min="0"
                    step="0.5"
                    name="experience"
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-[#edad1a] focus:ring-4 focus:ring-[#edad1a]/10"
                  />
                </label>

                {/* 6. Upload CV/Resume — required */}
                <label className="block">
                  <span className="block text-sm font-semibold text-[#00274d] mb-2">
                    Upload CV/Resume <span className="text-[#00274d]">*</span>
                  </span>
                  <span className="flex items-center gap-3 rounded-xl border border-dashed border-gray-300 bg-[#f8fafc] px-4 py-3 text-sm text-gray-600">
                    <Upload className="w-4 h-4 text-[#00274d]" />
                    <input
                      required
                      type="file"
                      name="resume"
                      accept=".pdf,.doc,.docx"
                      className="min-w-0 flex-1 text-sm file:mr-3 file:rounded-lg file:border-0 file:bg-[#00274d] file:px-3 file:py-1.5 file:text-xs file:font-semibold file:text-white"
                    />
                  </span>
                  <span className="mt-1 block text-xs text-gray-400">PDF or DOC, max 5MB.</span>
                </label>

                {/* 7. Portfolio Link — optional */}
                <label className="block md:col-span-2">
                  <span className="block text-sm font-semibold text-[#00274d] mb-2">
                    Portfolio Link <span className="text-gray-400 font-normal">(if applicable)</span>
                  </span>
                  <input
                    type="url"
                    name="portfolio"
                    placeholder="https://"
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-[#edad1a] focus:ring-4 focus:ring-[#edad1a]/10"
                  />
                </label>

                {/* 8. Cover Note — optional */}
                <label className="block md:col-span-2">
                  <span className="block text-sm font-semibold text-[#00274d] mb-2">
                    Cover Note / Message
                  </span>
                  <textarea
                    name="message"
                    rows={5}
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-[#edad1a] focus:ring-4 focus:ring-[#edad1a]/10"
                  />
                </label>
              </div>

              {submitted && (
                <div className="mt-6 rounded-xl border border-[#edad1a]/30 bg-[#edad1a]/10 px-4 py-3 text-sm font-semibold text-[#00274d]">
                  Thank you for applying to Vendor Infra. Our HR team will review your application and reach out if your profile matches our requirements.
                </div>
              )}
              {submitError && (
                <div className="mt-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-600">
                  {submitError}
                </div>
              )}

              <div className="mt-7 flex flex-col sm:flex-row sm:items-center gap-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={siteButtonClasses("primary", "px-6 py-3 disabled:cursor-not-allowed disabled:opacity-60")}
                >
                  {isSubmitting ? "Submitting..." : "Submit Application"} <Send className="w-4 h-4" />
                </button>
                <p className="text-xs text-gray-500">
                  Questions? Reach out anytime at{" "}
                  <a href="mailto:hrhelpdesk@vendorinfra.com" className="font-semibold text-[#00274d] hover:text-[#edad1a]">
                    hrhelpdesk@vendorinfra.com
                  </a>
                </p>
              </div>
            </form>
          </div>
        </section>

        <section className="pb-16 md:pb-20">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="rounded-2xl bg-[#00274d] px-6 py-8 md:px-10 md:py-10 text-white">
              <h2 className="text-2xl font-bold mb-3">Equal opportunity statement</h2>
              <p className="text-white/75 leading-relaxed">
                Vendor Infra is an equal opportunity employer. We celebrate diversity and are committed to creating an inclusive environment for all employees, regardless of background, gender, religion, or disability status.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}