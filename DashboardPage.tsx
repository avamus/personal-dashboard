"use client"

import React from "react"
import Image from "next/image"
import { Target, FileDown, RefreshCw, Star, TrendingUp, Zap, Award, Info, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Progress } from "@/components/ui/progress"
import { Lightbulb, AlertTriangle, GraduationCap, BarChartIcon as ChartBar } from "lucide-react"

const profile = {
  nurturer: {
    score: 85,
    description:
      "Nurturers are empathetic, supportive, and focused on building strong relationships in their real estate dealings.",
    explanation: `Your high Nurturer score of 85% indicates that you have an exceptional ability to understand and connect with clients on an emotional level. This is a significant strength in the real estate industry, where trust and rapport are crucial.

Key Strengths:
1. Emotional Intelligence: You excel at reading and responding to clients' emotional needs, making them feel understood and valued.
2. Relationship Building: Your natural ability to form strong, lasting relationships can lead to a loyal client base and frequent referrals.
3. Active Listening: You likely have a talent for truly hearing what clients are saying, both verbally and non-verbally.
4. Conflict Resolution: Your empathetic nature allows you to navigate and resolve conflicts smoothly, ensuring deals stay on track.

Areas for Leverage:
• Focus on luxury or high-end markets where personal touch and attention to detail are highly valued.
• Develop a specialty in helping first-time homebuyers who may need extra support and guidance.
• Consider partnering with investors or developers who may benefit from your people skills in community relations.

Potential Challenges:
• Be cautious of becoming too emotionally invested in deals, which could cloud your judgment.
• Ensure you're not neglecting the analytical aspects of real estate in favor of the relational elements.

Development Opportunities:
1. Enhance your negotiation skills to complement your relationship-building abilities.
2. Study market trends and financial analysis to balance your emotional intelligence with strong analytical skills.
3. Practice setting boundaries to maintain professional relationships without becoming overly involved.

Remember, your high Nurturer score is a powerful asset in real estate. By leveraging this strength while addressing potential blind spots, you can create a unique and highly effective approach to your real estate career.`,
  },
  integrator: {
    score: 75,
    description:
      "Integrators excel at bringing together different aspects of real estate deals and coordinating between various parties.",
    explanation: `Your strong Integrator score of 75% demonstrates your adeptness at managing complex deals and coordinating between different stakeholders. This skill is invaluable in the multifaceted world of real estate transactions.

Key Strengths:
1. Project Management: You have a natural talent for overseeing multiple moving parts of a deal simultaneously.
2. Stakeholder Coordination: Your ability to liaise between buyers, sellers, agents, lawyers, and other parties is highly developed.
3. Problem-Solving: You excel at finding solutions that satisfy multiple parties, keeping deals on track.
4. Big Picture Thinking: You can see how various elements of a transaction fit together, allowing for smoother processes.

Areas for Leverage:
• Specialize in complex, multi-party transactions such as commercial real estate or large residential developments.
• Consider roles in real estate development where coordinating between architects, contractors, and city planners is crucial.
• Explore opportunities in real estate investment trusts (REITs) where understanding and integrating various property types and stakeholders is key.

Potential Challenges:
• Be mindful not to overlook important details while focusing on the big picture.
• Ensure you're not taking on too many responsibilities that could be delegated to others.

Development Opportunities:
1. Enhance your knowledge of real estate law and contracts to better understand all aspects of complex deals.
2. Develop your leadership skills to more effectively guide teams through intricate transactions.
3. Study advanced negotiation techniques to better balance the needs of multiple stakeholders.

Your Integrator skills position you well for handling sophisticated real estate transactions. By continuing to develop these abilities and being aware of potential pitfalls, you can become an indispensable asset in complex real estate scenarios.`,
  },
  synergist: {
    score: 60,
    description:
      "Synergists are skilled at creating harmonious collaborations and finding win-win solutions in real estate transactions.",
    explanation: `Your moderate Synergist score of 60% suggests you have a good foundation in creating collaborative environments and finding mutually beneficial solutions. This skill is particularly valuable in negotiations and conflict resolution within real estate deals.

Key Strengths:
1. Collaboration: You have a knack for bringing people together and fostering teamwork.
2. Win-Win Mindset: You naturally seek solutions that benefit all parties involved in a transaction.
3. Conflict Management: Your ability to harmonize different viewpoints helps in smoothing over disagreements.
4. Adaptability: You can adjust your approach to suit different personalities and situations.

Areas for Leverage:
• Focus on deals that require a high degree of cooperation, such as joint ventures or partnership-based investments.
• Consider specializing in markets or niches where community support is crucial, like urban renewal projects.
• Explore roles in real estate mediation or as a transaction coordinator where your synergistic skills can shine.

Potential Challenges:
• Be cautious of compromising too much in an effort to please all parties, potentially at the cost of your client's best interests.
• Ensure that your desire for harmony doesn't lead to avoiding necessary difficult conversations.

Development Opportunities:
1. Enhance your negotiation skills, focusing on strategies that create value for all parties.
2. Study group dynamics and team leadership to better facilitate collaborative environments.
3. Develop your assertiveness to balance your collaborative nature with the ability to stand firm when necessary.
4. Improve your financial analysis skills to ensure that win-win solutions are also financially sound.

Your Synergist abilities provide a solid foundation for creating harmonious and productive real estate transactions. By further developing these skills and being mindful of potential pitfalls, you can become highly effective in situations requiring cooperation and mutual benefit.`,
  },
  genius: {
    score: 45,
    description:
      "Geniuses in real estate have a knack for innovative problem-solving and thinking outside the box to close deals.",
    explanation: `Your Genius score of 45% indicates that while you have some capacity for innovative thinking, there's significant room for growth in this area. Developing your Genius traits can greatly enhance your ability to find unique solutions in challenging real estate scenarios.

Key Strengths:
1. Potential for Creative Thinking: You have a foundation for thinking outside the box, which can be further developed.
2. Openness to New Ideas: Your score suggests you're likely receptive to novel approaches in real estate.
3. Problem-Solving Base: You have a starting point for developing more advanced problem-solving skills.

Areas for Leverage:
• Look for opportunities to work on unconventional deals where your budding creative skills can be put to use.
• Seek out mentors known for their innovative approaches in real estate to learn from their strategies.
• Consider focusing on emerging areas of real estate, such as eco-friendly developments or smart home technologies, where innovative thinking is valued.

Potential Challenges:
• You may sometimes struggle to find unique solutions to complex problems, potentially falling back on conventional methods.
• There might be a tendency to overlook creative possibilities in favor of tried-and-true approaches.

Development Opportunities:
1. Engage in brainstorming exercises regularly to strengthen your creative muscles.
2. Study creative problem-solving techniques and apply them to real estate scenarios.
3. Expose yourself to diverse areas of knowledge outside of real estate to broaden your perspective and inspire innovative thinking.
4. Practice looking at properties and deals from multiple angles, always asking "What if?" to challenge conventional wisdom.
5. Collaborate with colleagues who score high on the Genius scale to learn from their approach.

While your current Genius score is lower, remember that creative thinking is a skill that can be developed with practice. By actively working on this area, you can significantly enhance your ability to find innovative solutions in your real estate career, setting yourself apart in challenging or unique situations.`,
  },
}

const strengthsData = [
  {
    title: "Wholesaling",
    description: "Exceptional at building trust and understanding seller motivations",
    action: "Leverage this strength by focusing on distressed properties and motivated sellers.",
    progressValue: 85,
    progressLabel: "Mastery Level",
    strongPoints: ["Rapid rapport building", "Identifying motivated sellers", "Negotiating win-win deals"],
    improvementAreas: [
      "Expand network of cash buyers",
      "Streamline due diligence process",
      "Enhance property valuation skills",
    ],
  },
  {
    title: "Creative Finance",
    description: "Skilled at explaining complex options and creating win-win scenarios",
    action: "Explore and offer more creative financing solutions to stand out in competitive markets.",
    progressValue: 78,
    progressLabel: "Expertise Level",
    strongPoints: ["Subject-to deals", "Lease options", "Owner financing structures"],
    improvementAreas: [
      "Stay updated on lending regulations",
      "Expand knowledge of commercial financing",
      "Develop more investor relationships",
    ],
  },
  {
    title: "Objection Handling",
    description: "Excellent emotional intelligence for addressing concerns",
    action: "Conduct workshops to share your objection handling techniques with your team.",
    progressValue: 92,
    progressLabel: "Proficiency Level",
    strongPoints: ["Active listening", "Empathetic responses", "Solution-oriented approach"],
    improvementAreas: [
      "Develop scripts for common objections",
      "Practice handling difficult personalities",
      "Learn advanced persuasion techniques",
    ],
  },
  {
    title: "Foreclosure Specialization",
    description: "High empathy with ability to maintain professional boundaries",
    action: "Develop a niche marketing strategy targeting homeowners facing foreclosure.",
    progressValue: 88,
    progressLabel: "Specialization Level",
    strongPoints: [
      "Understanding foreclosure timelines",
      "Navigating legal complexities",
      "Providing valuable alternatives to homeowners",
    ],
    improvementAreas: [
      "Build relationships with foreclosure attorneys",
      "Stay updated on local foreclosure laws",
      "Develop a system for tracking pre-foreclosure leads",
    ],
  },
]

const developmentAreas = [
  {
    title: "Analytical Skills",
    description: "Strengthen your ability to evaluate deals quickly and accurately.",
    currentLevel: 6,
    resources: [
      "Online course: 'Real Estate Analytics 101'",
      "Webinar: 'Fast Deal Evaluation Techniques'",
      "Book: 'The Real Estate Investor's Handbook'",
    ],
  },
  {
    title: "Negotiation",
    description: "Develop more assertiveness and effective strategies in negotiations.",
    currentLevel: 5,
    resources: [
      "Workshop: 'Mastering Real Estate Negotiations'",
      "Role-playing exercises with team members",
      "Podcast: 'The Art of the Deal in Real Estate'",
    ],
  },
  {
    title: "Market Trend Analysis",
    description: "Enhance your capability to identify and leverage market trends.",
    currentLevel: 4,
    resources: [
      "Subscription to local real estate market reports",
      "Seminar: 'Predicting Real Estate Market Shifts'",
      "Join local real estate investment groups for networking",
    ],
  },
]

const actionPlan = [
  { action: "Daily: 2 hours of cold calling when energy is highest", completed: false },
  { action: "Weekly: Analyze 10 potential deals using systematic approach", completed: false },
  { action: "Monthly: Research and implement 3 new financing strategies", completed: false },
]

const focusAreas = [
  {
    title: "Investment Analysis",
    value: 65,
    description: "Your analytical skills and market understanding make you well-suited for investment analysis.",
    tips: "Focus on developing financial modeling skills and understanding market dynamics.",
  },
  {
    title: "Property Development",
    value: 70,
    description: "Your ability to coordinate multiple stakeholders and see the big picture aligns with development.",
    tips: "Build knowledge in construction, zoning laws, and project management.",
  },
  {
    title: "Luxury Real Estate",
    value: 80,
    description: "Your strong interpersonal skills and attention to detail match luxury market requirements.",
    tips: "Develop expertise in high-end market trends and luxury client service.",
  },
]

const performanceMetrics = [
  {
    title: "Relationship Building",
    value: 85,
    description: "Your ability to establish and maintain strong connections with clients and partners.",
    tips: "Focus on active listening and follow-up to further improve this skill.",
  },
  {
    title: "Deal Conversion",
    value: 72,
    description: "The rate at which you successfully close real estate transactions.",
    tips: "Work on your negotiation skills and objection handling to increase your conversion rate.",
  },
  {
    title: "Follow-up Effectiveness",
    value: 90,
    description: "How well you maintain contact and provide value to clients over time.",
    tips: "Consider implementing a CRM system to streamline your follow-up process.",
  },
]

export default function DashboardPage() {
  const [showInfo, setShowInfo] = React.useState(Array(focusAreas.length).fill(false))
  const [expandedCategory, setExpandedCategory] = React.useState<string | null>(null)

  return (
    <div className="min-h-screen bg-gray-50 p-8 rounded-xl shadow-[0_0_15px_rgba(0,128,0,0.1)]">
      <div className="mx-auto max-w-7xl space-y-8">
        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0">
          <div>
            <div className="flex items-center mb-4">
              <div className="flex items-center">
                <Image
                  src="https://res.cloudinary.com/drkudvyog/image/upload/v1739377263/My_ISNG_Profile_icon_duha_zzzrdn.png"
                  alt="ISNG Profile Icon"
                  width={32}
                  height={32}
                  className="w-8 h-8 mr-3"
                />
                <h1 className="text-3xl font-bold text-black">My ISNG Profile</h1>
              </div>
            </div>
            <p className="text-xl text-gray-700 mt-4">
              Your ISNG (Integrator, Synergist, Nurturer, Genius) profile is based on your responses to the assessment.
              Each category represents a different aspect of your real estate personality and approach.
            </p>
          </div>
        </div>

        <Card className="bg-white shadow-lg rounded-2xl overflow-hidden">
          <CardHeader className="bg-white p-6 shadow-lg rounded-2xl mb-8">
            <CardContent className="p-6 mt-4">
              <div className="grid gap-6">
                <div className="rounded-3xl p-5 shadow-[0_0_15px_rgba(0,0,0,0.1)] bg-white">
                  <div className="flex items-center mb-3">
                  <div className="flex items-center gap-2">
  <div className="flex items-center gap-2">
    <Image
      src="https://res.cloudinary.com/drkudvyog/image/upload/v1739377263/My_ISNG_Profile_icon_duha_zzzrdn.png"
      alt="ISNG Breakdown Icon"
      width={24}
      height={24}
      className="w-6 h-6"
    />
    <h3 className="text-2xl font-bold text-black">Your ISNG Breakdown</h3>
  </div>
  <Info className="w-5 h-5 text-[#5b06be] cursor-pointer" />
</div>
                    <Popover>
                      <PopoverTrigger>
                        <Info className="w-5 h-5 text-[#5b06be] cursor-pointer" />
                      </PopoverTrigger>
                      <PopoverContent className="w-80 p-6">
                        <div className="flex items-start space-x-4">
                          <Info className="w-6 h-6 text-[#5b06be] flex-shrink-0 mt-1" />
                          <div>
                            <h4 className="font-semibold text-[#5b06be] mb-2">ISNG Score Interpretation</h4>
                            <p className="text-sm text-gray-700 leading-relaxed">
                              The percentages indicate your strength in each category:
                            </p>
                            <ul className="mt-2 space-y-1 text-sm text-gray-700 list-disc list-inside">
                              <li>Higher percentages: Areas where you naturally excel</li>
                              <li>
                                Lower percentages: Potential areas for growth and development in your real estate career
                              </li>
                            </ul>
                          </div>
                        </div>
                      </PopoverContent>
                    </Popover>
                  </div>
                  <div className="space-y-4 relative">
                    <div className="flex justify-end space-x-4 mb-4">
                      <Button className="bg-[#5b06be] hover:bg-[#4a05a0] text-white font-semibold rounded-full px-6 py-2 flex items-center">
                        <FileDown className="w-4 h-4 mr-2" />
                        Download PDF
                      </Button>
                      <Button className="bg-gradient-to-r from-[#fbb350] to-[#f89d2a] hover:from-[#faa240] hover:to-[#f78c1a] text-white font-semibold rounded-full px-8 py-4 flex items-center justify-center group transition-all duration-300 shadow-md hover:shadow-lg text-lg">
                        <RefreshCw className="w-6 h-6 mr-3 group-hover:rotate-180 transition-transform duration-500" />
                        <div className="flex flex-col items-start">
                          <span className="text-base font-bold">Retake Test</span>
                          <span className="text-sm opacity-90">10 credits</span>
                        </div>
                      </Button>
                    </div>
                    {Object.entries(profile)
                      .sort(([type]) => (type === "nurturer" ? -1 : 1))
                      .map(([type, { score, description, explanation }]) => (
                        <div
                          key={type}
                          className={`bg-gradient-to-br from-white to-gray-50 rounded-lg p-4 border border-gray-100 transition-all duration-300 ${
                            expandedCategory === type ? "shadow-xl relative z-10" : expandedCategory ? "opacity-25" : ""
                          }`}
                        >
                          <div className="mb-3">
                            <div className="flex items-center gap-2 mb-2">
                              {type === "nurturer" && (
                                <Image
                                  src="https://res.cloudinary.com/drkudvyog/image/upload/v1739294075/Nurturer_icon_green_ccioe1.png"
                                  alt="Nurturer Icon"
                                  width={32}
                                  height={32}
                                  className="w-8 h-8 object-contain"
                                />
                              )}
                              {type === "integrator" && (
                                <Image
                                  src="https://res.cloudinary.com/drkudvyog/image/upload/v1739294888/Integrator_icon_purple_xf50hd.png"
                                  alt="Integrator Icon"
                                  width={32}
                                  height={32}
                                  className="w-8 h-8 object-contain"
                                />
                              )}
                              {type === "synergist" && (
                                <Image
                                  src="https://res.cloudinary.com/drkudvyog/image/upload/v1739295223/Synergist_icon_blue_gvi8zp.png"
                                  alt="Synergist Icon"
                                  width={32}
                                  height={32}
                                  className="w-8 h-8 object-contain"
                                />
                              )}
                              {type === "genius" && (
                                <Image
                                  src="https://res.cloudinary.com/drkudvyog/image/upload/v1739295658/Genius_icon_yellow_d4fjhj.png"
                                  alt="Genius Icon"
                                  width={32}
                                  height={32}
                                  className="w-8 h-8 object-contain"
                                />
                              )}
                              <span
                                className={`text-lg font-bold capitalize ${
                                  type === "nurturer"
                                    ? "text-green-600"
                                    : type === "integrator"
                                      ? "text-[#5b06be]"
                                      : type === "synergist"
                                        ? "text-blue-600"
                                        : "text-[#fbb350]"
                                }`}
                              >
                                {type}
                              </span>
                            </div>
                            <p className="text-sm text-gray-600 mt-2">
                              {type === "nurturer"
                                ? "Nurturers are empathetic, supportive, and focused on building strong relationships in their real estate dealings."
                                : type === "integrator"
                                  ? "Integrators excel at bringing together different aspects of real estate deals and coordinating between various parties."
                                  : type === "synergist"
                                    ? "Synergists are skilled at creating harmonious collaborations and finding win-win solutions in real estate transactions."
                                    : "Geniuses in real estate have a knack for innovative problem-solving and thinking outside the box to close deals."}
                            </p>
                          </div>

                          <div className="flex justify-between items-center mb-1">
                            <span className="text-sm font-medium text-gray-600">Score</span>
                            <span
                              className={`text-base font-bold ${
                                type === "nurturer"
                                  ? "text-green-600"
                                  : type === "integrator"
                                    ? "text-[#5b06be]"
                                    : type === "synergist"
                                      ? "text-blue-600"
                                      : "text-[#fbb350]"
                              }`}
                            >
                              {score}%
                            </span>
                          </div>
                          <Progress
  value={score}
  className={`h-2 mb-2 bg-[#F4F4F5] ${
    type === "nurturer"
      ? "[&>div]:bg-green-500"
      : type === "integrator"
        ? "[&>div]:bg-[#5b06be]"
        : type === "synergist"
          ? "[&>div]:bg-blue-500"
          : "[&>div]:bg-[#fbb350]"
  }`}
/>
                          <div className="mt-2">
                            <Button
                              variant="outline"
                              size="sm"
                              className={`w-full text-sm py-2 px-4 rounded-full mt-3 ${
                                type === "nurturer"
                                  ? "bg-green-500 hover:bg-green-600 text-white border-green-500 hover:border-green-600"
                                  : type === "integrator"
                                    ? "bg-[#5b06be] hover:bg-[#4a05a0] text-white border-[#5b06be] hover:border-[#4a05a0]"
                                    : type === "synergist"
                                      ? "bg-blue-500 hover:bg-blue-600 text-white border-blue-500 hover:border-blue-600"
                                      : "bg-[#fbb350] hover:bg-[#e9a23f] text-white border-[#fbb350] hover:border-[#e9a23f]"
                              }`}
                              onClick={() => {
                                setExpandedCategory(expandedCategory === type ? null : type)
                              }}
                            >
                              {expandedCategory === type ? "Hide Detailed Analysis" : "View Detailed Analysis"}
                            </Button>
                          </div>
                          {expandedCategory === type && (
                            <div
                              className={`mt-6 text-sm text-gray-700 bg-white p-6 rounded-xl shadow-lg relative z-20 mx-auto max-w-[98%] ${
                                type === "nurturer"
                                  ? "bg-green-50 border-green-200"
                                  : type === "integrator"
                                    ? "bg-purple-50 border-purple-200"
                                    : type === "synergist"
                                      ? "bg-blue-50 border-blue-200"
                                      : "bg-yellow-50 border-yellow-200"
                              } border-2`}
                            >
                              <h5
                                className={`text-2xl font-bold mb-4 ${
                                  type === "nurturer"
                                    ? "text-green-700"
                                    : type === "integrator"
                                      ? "text-purple-700"
                                      : type === "synergist"
                                        ? "text-blue-700"
                                        : "text-yellow-700"
                                }`}
                              >
                                Detailed Analysis
                              </h5>
                              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                <Card
                                  className={`border-l-4 ${
                                    type === "nurturer"
                                      ? "border-l-green-500"
                                      : type === "integrator"
                                        ? "border-l-purple-500"
                                        : type === "synergist"
                                          ? "border-l-blue-500"
                                          : "border-l-yellow-500"
                                  }`}
                                >
                                  <CardHeader>
                                    <CardTitle
                                      className={`flex items-center ${
                                        type === "nurturer"
                                          ? "text-green-700"
                                          : type === "integrator"
                                            ? "text-purple-700"
                                            : type === "synergist"
                                              ? "text-blue-700"
                                              : "text-yellow-700"
                                      }`}
                                    >
                                      <Lightbulb className="w-6 h-6 mr-2" />
                                      Key Strengths
                                    </CardTitle>
                                  </CardHeader>
                                  <CardContent>
                                    <ul className="space-y-2">
                                      {explanation
                                        .split("\n\n")[1]
                                        .split("\n")
                                        .slice(1)
                                        .map((strength, idx) => (
                                          <li key={idx} className="flex items-start">
                                            <ChevronRight className="w-4 h-4 mr-2 text-green-500 flex-shrink-0 mt-1" />
                                            <span>{strength.replace(/^\d+\.\s/, "")}</span>
                                          </li>
                                        ))}
                                    </ul>
                                  </CardContent>
                                </Card>

                                <Card
                                  className={`border-l-4 ${
                                    type === "nurturer"
                                      ? "border-l-green-500"
                                      : type === "integrator"
                                        ? "border-l-purple-500"
                                        : type === "synergist"
                                          ? "border-l-blue-500"
                                          : "border-l-yellow-500"
                                  }`}
                                >
                                  <CardHeader>
                                    <CardTitle
                                      className={`flex items-center ${
                                        type === "nurturer"
                                          ? "text-green-700"
                                          : type === "integrator"
                                            ? "text-purple-700"
                                            : type === "synergist"
                                              ? "text-blue-700"
                                              : "text-yellow-700"
                                      }`}
                                    >
                                      <Target className="w-6 h-6 mr-2" />
                                      Areas for Leverage
                                    </CardTitle>
                                  </CardHeader>
                                  <CardContent>
                                    <ul className="space-y-2">
                                      {explanation
                                        .split("\n\n")[2]
                                        .split("\n")
                                        .map((area, idx) => (
                                          <li key={idx} className="flex items-start">
                                            <ChevronRight className="w-4 h-4 mr-2 text-blue-500 flex-shrink-0 mt-1" />
                                            <span>{area.replace(/^•\s/, "")}</span>
                                          </li>
                                        ))}
                                    </ul>
                                  </CardContent>
                                </Card>

                                <Card
                                  className={`border-l-4 ${
                                    type === "nurturer"
                                      ? "border-l-green-500"
                                      : type === "integrator"
                                        ? "border-l-purple-500"
                                        : type === "synergist"
                                          ? "border-l-blue-500"
                                          : "border-l-yellow-500"
                                  }`}
                                >
                                  <CardHeader>
                                    <CardTitle
                                      className={`flex items-center ${
                                        type === "nurturer"
                                          ? "text-green-700"
                                          : type === "integrator"
                                            ? "text-purple-700"
                                            : type === "synergist"
                                              ? "text-blue-700"
                                              : "text-yellow-700"
                                      }`}
                                    >
                                      <AlertTriangle className="w-6 h-6 mr-2" />
                                      Potential Challenges
                                    </CardTitle>
                                  </CardHeader>
                                  <CardContent>
                                    <ul className="space-y-2">
                                      {explanation
                                        .split("\n\n")[3]
                                        .split("\n")
                                        .map((challenge, idx) => (
                                          <li key={idx} className="flex items-start">
                                            <ChevronRight className="w-4 h-4 mr-2 text-yellow-500 flex-shrink-0 mt-1" />
                                            <span>{challenge.replace(/^•\s/, "")}</span>
                                          </li>
                                        ))}
                                    </ul>
                                  </CardContent>
                                </Card>

                                <Card
                                  className={`border-l-4 ${
                                    type === "nurturer"
                                      ? "border-l-green-500"
                                      : type === "integrator"
                                        ? "border-l-purple-500"
                                        : type === "synergist"
                                          ? "border-l-blue-500"
                                          : "border-l-yellow-500"
                                  }`}
                                >
                                  <CardHeader>
                                    <CardTitle
                                      className={`flex items-center ${
                                        type === "nurturer"
                                          ? "text-green-700"
                                          : type === "integrator"
                                            ? "text-purple-700"
                                            : type === "synergist"
                                              ? "text-blue-700"
                                              : "text-yellow-700"
                                      }`}
                                    >
                                      <GraduationCap className="w-6 h-6 mr-2" />
                                      Development Opportunities
                                    </CardTitle>
                                  </CardHeader>
                                  <CardContent>
                                    <ul className="space-y-2">
                                      {explanation
                                        .split("\n\n")[4]
                                        .split("\n")
                                        .slice(1)
                                        .map((opportunity, idx) => (
                                          <li key={idx} className="flex items-start">
                                            <ChevronRight className="w-4 h-4 mr-2 text-purple-500 flex-shrink-0 mt-1" />
                                            <span>{opportunity.replace(/^\d+\.\s/, "")}</span>
                                          </li>
                                        ))}
                                    </ul>
                                  </CardContent>
                                </Card>
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                  </div>
                </div>
              </div>
              <CardContent className="p-6 bg-white rounded-xl shadow-[0_0_20px_rgba(0,0,0,0.3)] mb-6 mt-12 overflow-hidden">
                <h2 className="text-2xl font-bold flex items-center text-black mb-6">
                  <Image
                    src="https://res.cloudinary.com/drkudvyog/image/upload/v1733951551/Areas_of_Improvement_icon_duha_kplce1.png"
                    alt="Areas of Improvement Icon"
                    width={24}
                    height={24}
                    className="mr-2"
                  />
                  Recommended Focus Areas
                </h2>
                <p className="mb-6 text-[#5b06be] font-medium">
                  Based on your natural abilities and prerequisites, these are the top three areas where you should
                  focus your real estate career:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {focusAreas.map((area, index) => {
  return (
    <div
      key={index}
      className="bg-white rounded-lg shadow-sm p-6 flex flex-col items-center text-center transition-all duration-300 hover:shadow-md"
                        >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-100/20 to-transparent rounded-xl" />
                        <div className="flex-grow">
                          {!showInfo[index] ? (
                            <div className="flex flex-col items-center justify-center h-full">
                              <div className="relative w-32 h-32 mb-4">
                                <svg className="w-full h-full transform -rotate-90">
                                <circle
  className="text-[#F4F4F5]"
  strokeWidth="10"
  stroke="currentColor"
  fill="transparent"
  r="58"
  cx="64"
  cy="64"
/>
<circle
  className="text-[#5b06be] transition-all duration-1000 ease-in-out"
  strokeWidth="10"
  strokeDasharray={364}
  strokeDashoffset={364 * (1 - area.value / 100)}
  strokeLinecap="round"
  stroke="currentColor"
  fill="transparent"
  r="58"
  cx="64"
  cy="64"
/>
                                </svg>
                                <div className="absolute inset-0 flex items-center justify-center">
                                  <span className="text-3xl font-bold text-[#5b06be]">{area.value}%</span>
                                </div>
                              </div>
                              <h3 className="text-2xl font-bold text-[#5b06be] mb-4 mt-6 text-center">{area.title}</h3>
                              <p className="text-sm text-gray-600 text-center leading-relaxed">{area.description}</p>
                            </div>
                          ) : (
                            <div className="h-full flex flex-col">
                              <h3 className="text-2xl font-bold text-[#5b06be] mb-4">{area.title}</h3>
                              <p className="text-sm text-gray-600 mb-6 flex-grow leading-relaxed">{area.description}</p>
                              <div className="bg-white rounded-lg p-4 shadow-[0_0_10px_rgba(125,59,219,0.3)]">
                                <h4 className="font-semibold text-[#7d3bdb] mb-2">Tips to Improve:</h4>
                                <p className="text-sm text-gray-600 leading-relaxed">{area.tips}</p>
                              </div>
                            </div>
                          )}
                        </div>
                        <Button
                          variant="outline"
                          size="lg"
                          onClick={() => {
                            const newShowInfo = [...showInfo]
                            newShowInfo[index] = !newShowInfo[index]
                            setShowInfo(newShowInfo)
                          }}
                          className="mt-6 bg-[#5b06be] text-white hover:bg-[#4a05a0] transition-all duration-200 rounded-full w-full px-6 py-3 text-base flex items-center justify-center gap-2"
                        >
                          {showInfo[index] ? (
                            <>
                              <ChartBar className="w-5 h-5" />
                              View Metric
                            </>
                          ) : (
                            <>
                              <Info className="w-5 h-5" />
                              View Info
                            </>
                          )}
                        </Button>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
              <div className="space-y-8">
                <Card className="bg-white rounded-2xl overflow-hidden shadow-[0_0_20px_rgba(0,0,0,0.3)] mt-12">
                  <CardContent className="p-8 shadow-[0_0_20px_rgba(0,0,0,0.2mt-12">
                    <h2 className="text-3xl font-bold text-black mb-6 flex items-center justify-start">
                      <Image
                        src="https://res.cloudinary.com/drkudvyog/image/upload/v1739454236/Key_Strengths_Action_Steps_icon_duha_wnldnl.png"
                        alt="Key Strengths & Action Steps Icon"
                        width={32}
                        height={32}
                        className="w-8 h-8 mr-3"
                      />
                      Key Strengths & Action Steps
                    </h2>
                    <p className="text-lg mb-6 text-gray-700">
                      These are the most important real estate strengths. Use them to excel in your career!
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      {strengthsData.slice(0, 3).map((strength, index) => (
                        <div
  key={index}
  className="bg-white rounded-lg p-6 shadow-[0_0_10px_rgba(0,0,0,0.2)] transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,0,0,0.25)] group"
>
<div className="flex items-center justify-center mb-4">
  <h3 className="text-2xl font-bold text-[#5b06be] text-center">{strength.title}</h3>
</div>
<div className="flex flex-col items-center justify-center h-16">
  <span className="text-3xl font-bold text-[#5b06be] mb-1">{strength.progressValue}%</span>
  <div className="w-full bg-[#F4F4F5] rounded-full h-2">
    <div
      className="bg-[#5b06be] h-2 rounded-full"
      style={{ width: `${strength.progressValue}%` }}
    ></div>
  </div>
</div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-8">
                      {strengthsData.slice(3, 4).map((strength, index) => (
                        <div
                          key={index}
                          className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 shadow-[0_0_10px_rgba(251,179,80,0.3)] transition-all duration-300 hover:shadow-[0_0_15px_rgba(251,179,80,0.35)] group"
                        >
                          <div className="flex items-center justify-between mb-4">
                            <h3 className="text-2xl font-bold text-[#fbb350]">{strength.title}</h3>
                            <div className="w-16 h-16 rounded-full bg-[#fbb350] flex items-center justify-center">
                              <Star className="w-8 h-8 text-white transform group-hover:scale-110 transition-transform duration-300" />
                            </div>
                          </div>
                          <div className="mb-4">
                            <div className="rounded-lg shadow-[0_0_10px_rgba(255,180,0,0.3)] p-4">
                              <div className="flex justify-between items-center mb-2">
                                <span className="text-sm font-medium text-gray-600">{strength.progressLabel}</span>
                                <span className="text-sm font-bold text-[#fbb350]">{strength.progressValue}%</span>
                              </div>
                              <Progress 
  value={strength.progressValue} 
  className="h-2 mb-2 bg-zinc-100 [&>div]:bg-[#fbb350]"
    indicatorColor="#F4F4F5" />
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-4 mb-4">
                            <div className="bg-white rounded-lg shadow-[0_0_10px_rgba(0,0,0,0.1)] p-4">
                              <h4 className="font-semibold text-[#fbb350] mb-2 flex items-center">
                                <TrendingUp className="w-4 h-4 mr-2" />
                                Strong Points
                              </h4>
                              <ul className="list-disc list-inside text-sm text-gray-600">
                                {strength.strongPoints.map((point, idx) => (
                                  <li key={idx}>{point}</li>
                                ))}
                              </ul>
                            </div>
                            <div className="bg-white rounded-lg shadow-[0_0_10px_rgba(0,0,0,0.1)] p-4">
                              <h4 className="font-semibold text-[#fbb350] mb-2 flex items-center">
                                <Zap className="w-4 h-4 mr-2" />
                                Areas to Improve
                              </h4>
                              <ul className="list-disc list-inside text-sm text-gray-600">
                                {strength.improvementAreas.map((area, idx) => (
                                  <li key={idx}>{area}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                          <div className="bg-white rounded-lg p-4 shadow-[0_0_10px_rgba(255,180,0,0.2)]">
                            <h4 className="font-semibold text-[#fbb350] mb-2 flex items-center">
                              <Award className="w-4 h-4 mr-2" />
                              Value Proposition
                            </h4>
                            <p className="text-sm text-gray-700">
                              Leveraging your expertise in {strength.title.toLowerCase()} can significantly increase
                              your deal flow and client satisfaction. Focus on this strength to stand out in the market
                              and drive your success.
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </CardHeader>
        </Card>
      </div>
    </div>
  )
}
